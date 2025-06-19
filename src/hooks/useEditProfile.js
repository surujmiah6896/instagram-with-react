import { useState } from "react"
import UseAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = UseAuthStore((state) => state.user);
    const setAuthUser = UseAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
    const Toast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if(isUpdating || !authUser) return;
        setIsUpdating(true);

        const storageRef = ref(storage, `profilePhotos/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        let URL = "";
        try{
            if(selectedFile){
                Toast("Success", "File not updated because have not storage", "success");
                return;
                // await uploadString(storageRef, selectedFile, "data_url");
                // URL = await getDownloadURL(ref(storage, `profilePhotos/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL,
            }

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            Toast("Success", "Profile updated successfully", "success");
        }catch(error){
            Toast("Error", error.message, "error");
        }
    }
  return {editProfile, isUpdating};
}

export default useEditProfile
