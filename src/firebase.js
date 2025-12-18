// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrPXoduUp0rEwVrxO3-XKYa19X5-rmO6U",
  authDomain: "quickseva-6295b.firebaseapp.com",
  projectId: "quickseva-6295b",
  storageBucket: "quickseva-6295b.firebasestorage.app",
  messagingSenderId: "22490112546",
  appId: "1:22490112546:web:e8dfe49c3b42bf70c8607b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
