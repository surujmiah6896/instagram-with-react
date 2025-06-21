import { useState } from "react"
import useShowToast from "./useShowToast";
import UseAuthStore from "../store/authStore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import postStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";

const useDeletePost = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const authUser = UseAuthStore((state) => state.user);
    const Toast = useShowToast();
    const deleteUserPost = postStore((state) => state.deletePost);
    const deletePostUserProfile = useUserProfileStore((state)=>state.deletePost);

    const deletePost = async (postId) => {
        
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        setIsDeleting(true);
        try{
            //delete image from firebase
            // const imgRef = ref(storage, `posts/${postId}`);
            // await deleteObject(imgRef);
            //delete post from firebase

            const userRef = doc(firestore, "users", authUser.uid);
            await deleteDoc(doc(firestore, "posts", postId));
            await updateDoc(userRef, {posts: arrayRemove(postId)});
            //update state
            deleteUserPost(postId);
            deletePostUserProfile(postId);
            Toast("Success", "Post Deleted Successfully", "success");
        }catch(error){
                Toast("Error", error.message, "error");
        }finally{
            setIsDeleting(false);
        }


    };

  return {isDeleting, deletePost};
}

export default useDeletePost
