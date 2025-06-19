import { useEffect, useState } from "react"
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserProfileBYUserName = (username) => {

    const [isLoading, setIsLoading] = useState(true);
    const Toast = useShowToast();
    const {userProfile, setUserProfile} = useUserProfileStore();

    useEffect(()=>{
        const getUserProfile = async () => {
            setIsLoading(true);
            try{
                const userRef = collection(firestore, "users");
                const userQue = where("username", "==", username);
                const q = query(userRef, userQue);
                const querySnapshot = await getDocs(q);

                if(querySnapshot.empty){
                    setUserProfile(null);
                    return;
                }

                let userDoc;
                querySnapshot.forEach((doc) => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);
            }catch(error){
                Toast("Error", error.message, "error");
            }finally{
                setIsLoading(false);
            }
        };

        getUserProfile();
    },[setUserProfile, username, Toast]);



  return {userProfile, isLoading};
}

export default useGetUserProfileBYUserName
