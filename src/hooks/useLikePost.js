import { useState } from "react"
import UseAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikePost = (post) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = UseAuthStore((state) => state.user);
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
    const Toast = useShowToast();

    const handleLikePost = async() => {
        if(isUpdating) return;
        if (!authUser) return Toast("Error", "You must be logged in to like a post", "error");
        setIsUpdating(true);

        try {
            const postRef = doc(firestore, "posts", post.id);
            await updateDoc(postRef, {
                likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            setIsLiked(!isLiked);
            isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
            const message = isLiked ? "Unliked" : "Liked" ;
            Toast("Success", `${message} Successfully`, "success");
        } catch (error) {
            Toast("Error", error.message, "error");
        }finally{
            setIsUpdating(false);
        }
    };

  return {isLiked, likes,isUpdating, handleLikePost};
}

export default useLikePost
