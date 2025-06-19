import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import UseAuthStore from "../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useGoogleLogin = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const loginUser = UseAuthStore((state) => state.login);

    const handelGoogleLogin = async () => {
        try{
            const newUser = await signInWithGoogle();
            
            if(!newUser && error){
                showToast("Error", error.message, "error");
                return;
            }

            const userRef = doc(firestore, "users", newUser.user.uid);
            const userSnapshot = await getDoc(userRef);
            console.log('userSnapshot',userSnapshot);
            

            if(userSnapshot.exists()){
                const userDoc = userSnapshot.data();
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
                showToast("Success", "User login with email successfully", "success");
            }else{
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    username: newUser.user.email.split("@")[0],
                    fullName: newUser.user.displayName,
                    bio: "",
                    profilePicURL: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
                showToast("Success", "User Signup with email successfully", "success");
            }
            

        }catch(error){
            showToast("Error", error.message, "error");
        }
    }

  return {
    handelGoogleLogin,loading, error
  }
}

export default useGoogleLogin
