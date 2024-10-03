// src/config/Firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const EVENTSConfig = {
  apiKey: "AIzaSyBaXF__tQjnCJbglVaR6NWt5lZJgilGo2c",
  authDomain: "events23-ac039.firebaseapp.com",
  projectId: "events23-ac039",
  storageBucket: "events23-ac039.appspot.com",
  messagingSenderId: "158615554504",
  appId: "1:158615554504:web:1e5ae8be25f92583af98fd",
  measurementId: "G-60LTRKWX3L"
};
// Initialize Firebase
const app = initializeApp(EVENTSConfig);
export const db = getFirestore(app);
// export const auth=getAuth(app);
// export const googleProvider= new GoogleAuthProvider();
// export const storage= getStorage(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// Export Firestore

// export const Football = getFirestore(app);

