// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtivzvDpbzR5XxcdyVasWH3d8imkK1iRE",
  authDomain: "netflixgpt-43580.firebaseapp.com",
  projectId: "netflixgpt-43580",
  storageBucket: "netflixgpt-43580.firebasestorage.app",
  messagingSenderId: "891604801611",
  appId: "1:891604801611:web:6d6e20cbadb56d5ab355ce",
  measurementId: "G-H2G91NKX4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
