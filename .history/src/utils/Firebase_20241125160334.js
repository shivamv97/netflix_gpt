// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_HWoJ13Kl2gB98kSRQbT__aewilOv7_Y",
  authDomain: "netflixgpt-9598b.firebaseapp.com",
  projectId: "netflixgpt-9598b",
  storageBucket: "netflixgpt-9598b.firebasestorage.app",
  messagingSenderId: "88162827509",
  appId: "1:88162827509:web:e159adfbd57c6598e0d9bc",
  measurementId: "G-HFGMSJBLXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
