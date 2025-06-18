import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnnPiYeipXVDLv71V-pnNtMWNOhx4AcCM",
    authDomain: "react-quiz-app-79073.firebaseapp.com",
    projectId: "react-quiz-app-79073",
    storageBucket: "react-quiz-app-79073.firebasestorage.app",
    messagingSenderId: "916479961888",
    appId: "1:916479961888:web:513af85b48b98d61828545"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, auth, firestore, storage};