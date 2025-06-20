import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth, firestore} from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import UseAuthStore from '../store/authStore';


const useSignUpWithEmailAndPassword = () => {

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const showToast = useShowToast();
      const loginUser = UseAuthStore(state => state.login);

      const signup = async (inputs) =>{
        if(!inputs.email || !inputs.password || !inputs.userName || !inputs.fullName){
            showToast("Error", "Please fill all the fields", "error");
            return;
        }


        const usersRef = collection(firestore, "users");

		const q = query(usersRef, where("email", "==", inputs.email));
		const querySnapshotUserEmail = await getDocs(q);

        const qu = query(usersRef, where("username", "==", inputs.userName));
		const querySnapshotUserName = await getDocs(qu);
         
         
        if (!querySnapshotUserEmail.empty) {
			showToast("Error", "User email already exists", "error");
			return;
		}
        if (!querySnapshotUserName.empty) {
			showToast("Error", "Username already exists", "error");
			return;
		}

        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                showToast("Error", error.message, "error");
                return;
            }

            if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.userName,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc);
			}

        }catch(error){
            showToast("Error", error.message, "error");
            
        }
      }
  return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword;
