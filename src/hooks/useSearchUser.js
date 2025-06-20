import React, { useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const Toast = useShowToast();

    const getUserInfo = async(username) => {
        setIsLoading(true);
        setUser(null);
        try {
            const q = query(collection(firestore, "users"), where("username","==", username ));
            const querySnapShot = await getDocs(q);
            if(querySnapShot.empty){
                Toast("Error", "User not found", "error");
                return;
            }

            querySnapShot.forEach((doc) => {
                setUser(doc.data());
            })
        } catch (error) {
            Toast("Error", error.message, "error");
        }finally{
            setIsLoading(false);
        }
    }
  return { isLoading, user, setUser, getUserInfo}
}

export default useSearchUser
