import { useEffect, useState } from "react"
import UseAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetSuggestedUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState(null);
    const authUser = UseAuthStore((state) => state.user);
    const Toast = useShowToast();

   

    useEffect(() => {
        const getSuggestedUsers = async () => {
            setIsLoading(true);
            try {
                const usersRef = collection(firestore, "users");
                const q = query(usersRef, where("uid", "not-in", [authUser.uid, ...authUser.following]),orderBy("uid"), limit(5));
                const qSnapShot = await getDocs(q);
                const users = [];
    
                qSnapShot.forEach((doc) => {
                    users.push({...doc.data(), id: doc.id});
                })
    
                setSuggestedUsers(users);
                
            } catch (error) {
                Toast("Error", error.message, "error");
            }finally{
                setIsLoading(false);
            }
        }
        if(authUser){
            getSuggestedUsers();
        }
    },[authUser, Toast]);
    
  return {isLoading, suggestedUsers};
}

export default useGetSuggestedUsers;
