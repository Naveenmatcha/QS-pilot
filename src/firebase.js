import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔍 DEBUG: Log all environment variables
console.log("🔍 DEBUG: Environment Variables:");
console.log("  VITE_FIREBASE_PROJECT_ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
console.log("  VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY?.substring(0, 20) + "...");
console.log("  VITE_FIREBASE_AUTH_DOMAIN:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 🔍 CHECK IF CONFIG IS COMPLETE
const missingKeys = Object.entries(firebaseConfig)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  console.error("❌ FIREBASE CONFIG ERROR: Missing environment variables:", missingKeys);
  console.error("Make sure these are set in your .env file:");
  missingKeys.forEach(key => console.error(`  - VITE_${key.toUpperCase()}`));
} else {
  console.log("✅ Firebase config is complete");
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// 💾 Enable offline persistence
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("💾 Firestore offline persistence enabled");
  })
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.warn("⚠️ Offline persistence failed - multiple tabs open?");
    } else if (err.code === "unimplemented") {
      console.warn("⚠️ Offline persistence not supported in this browser");
    } else {
      console.warn("⚠️ Offline persistence error:", err.message);
    }
  });

console.log("🔥 Firebase initialized with projectId:", firebaseConfig.projectId);


