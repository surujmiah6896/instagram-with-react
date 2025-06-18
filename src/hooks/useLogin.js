import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import UseAuthStore from '../store/authStore';
import { doc, getDoc } from 'firebase/firestore';
const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = UseAuthStore((state) => state.login);

    const handelLogin = async (inputs) =>{
        if(!inputs.email && !inputs.password){
            showToast('Error', "please fill all the fields", "error");
            return;
        }

        try{
        const authSnapshot = await signInWithEmailAndPassword(inputs.email, inputs.password);
        
        if(authSnapshot){
            const userRef = doc(firestore, "users", authSnapshot.user.uid);
            const userSnapshot = await getDoc(userRef);
            loginUser(userSnapshot.data());
        }
        showToast('Success', "User Login Successful", "success");
        }catch(error){
            showToast('Error', error.message, "error");
        }


    }
    

      return {handelLogin, loading, error}
}

export default useLogin;