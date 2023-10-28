// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b8567.firebaseapp.com",
  projectId: "real-estate-b8567",
  storageBucket: "real-estate-b8567.appspot.com",
  messagingSenderId: "777124445189",
  appId: "1:777124445189:web:07be012dd9efa6d5f4306c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);