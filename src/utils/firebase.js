// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtVPqUlX-aC1dfl0-hBubDZM2w-1i2oH0",
  authDomain: "netflixgpt-f0894.firebaseapp.com",
  projectId: "netflixgpt-f0894",
  storageBucket: "netflixgpt-f0894.firebasestorage.app",
  messagingSenderId: "1016127355815",
  appId: "1:1016127355815:web:bbc993be5183ee23e3d482",
  measurementId: "G-7MFTVK476N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
