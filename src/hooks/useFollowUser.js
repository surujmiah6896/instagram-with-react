import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import UseAuthStore from "../store/authStore";
import { firestore } from "../firebase/firebase";
import userProfileStore from "../store/userProfileStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const authUser = UseAuthStore((state) => state.user);
    const setAuthUser = UseAuthStore((state) => state.setUser);
    const {userProfile, setUserProfile} = userProfileStore();
    const Toast = useShowToast();

    const handleFollowUser = async() => {
          setIsUpdating(true);
          try {
            const currentUserRef = doc(firestore, "users", authUser.uid);
            const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

            //doc update on firebase
            await updateDoc(currentUserRef, {
              following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
            });

            await updateDoc(userToFollowOrUnfollowRef, {
              followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            //unfollow
            if(isFollowing){
              setAuthUser({
                ...authUser,
                following: authUser.followers.filter((uid) => uid !== userId),
              });

              if(userProfile){
                setUserProfile({
                  ...userProfile,
                  followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
                })
              }

              localStorage.setItem("user-info", JSON.stringify({
                ...authUser,
                following: authUser.following.filter((uid) => uid !== userId),
              }));

              setIsFollowing(false);
              Toast("Success", "Unfollow Successfully", "success");
            }else{
              //follow
              setAuthUser({
                ...authUser,
                following: [...authUser.following, userId],
              });

              if(userProfile){
                setUserProfile({
                  ...userProfile,
                  followers: [...userProfile.followers, authUser.uid],
                })
              }

              localStorage.setItem("user-info", JSON.stringify({
                ...authUser,
                following: [...authUser.following, userId],
              }));

              setIsFollowing(true);
              Toast("Success", "Follow Successfully", "success");
            }

          } catch (error) {
            Toast("Error", error.message, "error");
          }finally{
            setIsUpdating(false);
          }
    }


    useEffect(() => {
      if(authUser){
        const isFollowing = authUser.following.includes(userId);
        setIsFollowing(isFollowing);
      }
    },[authUser, userId]);

  return {isFollowing, isUpdating, handleFollowUser};
}

export default useFollowUser
