// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdwa6VCsJUqaxAjsZydVW52A9dntLMlxs",
  authDomain: "quickseva-c0c49.firebaseapp.com",
  projectId: "quickseva-c0c49",
  storageBucket: "quickseva-c0c49.firebasestorage.app",
  messagingSenderId: "575202046802",
  appId: "1:575202046802:web:ea429919908bbf5ddac08b",
  measurementId: "G-DJRSQEGY5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ EXPORT db (THIS WAS MISSING)
export const db = getFirestore(app);

// (optional, but safe if you already use auth)
export const auth = getAuth(app);