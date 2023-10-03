// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-c1169.firebaseapp.com",
    projectId: "mern-auth-c1169",
    storageBucket: "mern-auth-c1169.appspot.com",
    messagingSenderId: "48159370903",
    appId: "1:48159370903:web:87644f126b1ecea06543d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);