import { useState } from "react"
import useShowToast from "./useShowToast";
import UseAuthStore from "../store/authStore";
import postStore from "../store/postStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useCommentPost = () => {
    const [isCommenting, setIsCommenting] = useState(false);
    const Toast = useShowToast();
    const authUser = UseAuthStore((state) => state.user);
    const addComment = postStore((state) => state.addComment);

    const onCommentPost = async(postId, comment) => {
        if(isCommenting) return;
        if(!authUser){
            Toast("Error", "You must be logged in to comment", "error");
            return;
        } 
        setIsCommenting(true);
        const newComment = {
            postId,
            comment,
            createdBy: authUser.uid,
            createdAt: Date.now()
        };
        try {
            //store db
            await updateDoc(doc(firestore, "posts", postId),{
                comments: arrayUnion(newComment),
            });

            //update state
            addComment(postId, comment);
            Toast("Success", "Commented Successfully", "success");
        } catch (error) {
            Toast("Error", error.message, "error");
        }finally{
            setIsCommenting(false);
        }
    };
  return {isCommenting, onCommentPost};
}

export default useCommentPost
