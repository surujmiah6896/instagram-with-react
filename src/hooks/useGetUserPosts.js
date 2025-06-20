import { useEffect, useState } from "react"
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {posts, setPosts} = usePostStore();
    const Toast = useShowToast();
    const {userProfile} = useUserProfileStore();


    useEffect(()=>{
        const getPosts = async() => {
            if(!userProfile) return;
            setIsLoading(true);
            setPosts([]);

            try {
                const postRef = collection(firestore, "posts");
                const q = query(postRef, where("createdBy", "==", userProfile.uid));
                const qSnapShot = await getDocs(q);
                console.log("qSnapShot", qSnapShot);
                

                const posts = [];
                qSnapShot.forEach((doc) => {
                    posts.push({...doc.data(), id: doc.id});
                });

                posts.sort((a,b) => b.createdAt - a.createdAt);
                setPosts(posts);
                
            } catch (error) {
                Toast("Error", error.message, "error");
                setPosts([]);
            }finally{
                setIsLoading(false);
            }
        };
        getPosts();
    },[userProfile, setPosts, Toast]);

  return {isLoading, posts};
}

export default useGetUserPosts
