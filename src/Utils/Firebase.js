// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDol7kRVuJGPFEiXvWg0tMxRgiTzvzdmL0",
  authDomain: "netflixgpt-4d21e.firebaseapp.com",
  projectId: "netflixgpt-4d21e",
  storageBucket: "netflixgpt-4d21e.appspot.com",
  messagingSenderId: "1073985609180",
  appId: "1:1073985609180:web:4ece805d75b88a4c424319",
  measurementId: "G-XG3D0H616Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();