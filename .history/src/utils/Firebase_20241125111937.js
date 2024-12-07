// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AAB0wf8dEDEAtIhCqeIiNkUluUPeT94",
  authDomain: "netflix-gpt-c6ede.firebaseapp.com",
  projectId: "netflix-gpt-c6ede",
  storageBucket: "netflix-gpt-c6ede.firebasestorage.app",
  messagingSenderId: "913902719936",
  appId: "1:913902719936:web:8ba0ca50584433b823ee25",
  measurementId: "G-64FK2W4NCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
