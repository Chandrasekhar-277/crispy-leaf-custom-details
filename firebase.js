// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfsF7fJyOofI2rQYYuWp4VQpA7bYiOZKs",
  authDomain: "crispyleaf.firebaseapp.com",
  projectId: "crispyleaf",
  storageBucket: "crispyleaf.firebasestorage.app",
  messagingSenderId: "582419551885",
  appId: "1:582419551885:web:4d74ac285a7e5e321ab4c4",
  measurementId: "G-VC89NBZKW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
