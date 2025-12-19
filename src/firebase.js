// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIJz8QWtOHoDFu5SAqp_uHPq_svXyJY7U",
  authDomain: "qs1-pilot.firebaseapp.com",
  projectId: "qs1-pilot",
  storageBucket: "qs1-pilot.firebasestorage.app",
  messagingSenderId: "476422085482",
  appId: "1:476422085482:web:aaa5866deeff2c43486313",
  measurementId: "G-HJ6B0XPD2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);