import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/firebase";
import useShowToast from './useShowToast';
const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();

    const handelLogout = async () => {
        try{
            await signOut();
            localStorage.removeItem('user-info');
            showToast("Success","Logout Successfully", "success");
        }catch(error){
            showToast("Error",error.message, "error");
        }
    }
  return {handelLogout, loading, error}
}

export default useLogout
