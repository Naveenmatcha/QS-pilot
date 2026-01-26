import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationCapture from "../components/LocationCapture";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../utils/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// 🔥 BEST FIRESTORE-SAFE CLEANER (reliable method)
const firestoreSafe = (obj) =>
  JSON.parse(
    JSON.stringify(obj, (key, value) =>
      value === undefined ? null : value
    )
  );

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart } = useCart();

  const [postalCode, setPostalCode] = useState("");

  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 🛒 Calculate cart totals dynamically
  const cartItems = Object.values(cart);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 🧪 TEST FIRESTORE ON MOUNT
  useEffect(() => {
    console.log("🔧 Booking page mounted - Testing Firebase...");
    console.log("📦 DB Object:", db);
    
    if (db._databaseId) {
      const projectId = db._databaseId.projectId;
      console.log("✅ Firebase ProjectID DETECTED:", projectId);
      console.log("Expected ProjectID: quickseva-c0c49");
      
      if (projectId !== "quickseva-c0c49") {
        console.error("❌ WRONG ProjectID! Got:", projectId);
        setError(`❌ WRONG Firebase Project: ${projectId}\n\nMake sure .env file has correct credentials and dev server was restarted.`);
      } else {
        console.log("✅✅ ProjectID matches! Firebase is configured correctly.");
      }
    }
  }, []);

  const handleSubmit = async () => {
    // ✅ VALIDATION
    if (cartItems.length === 0) {
      alert("Please add services to cart first");
      return;
    }
    if (!address) {
      alert("Please detect your location");
      return;
    }
    if (!date) {
      alert("Please select a date");
      return;
    }
    if (!time) {
      alert("Please select time");
      return;
    }
    if (!postalCode || postalCode.trim().length < 3) {
      alert("Please confirm your postal code");
      return;
    }

    // ✅ CHECK USER AUTHENTICATION
    if (!user) {
      alert("❌ You must be logged in to book a service");
      setError("User not authenticated. Please log in again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      console.log("🔐 User info:", { uid: user?.uid, phone: user?.phone, name: user?.name });
      console.log("📦 DB instance:", db);
      console.log("🌐 Navigator online:", navigator.onLine);
      
      // 🧪 CHECK FIREBASE CONFIG
      if (db._databaseId?.projectId) {
        console.log("✅ Firebase ProjectID:", db._databaseId.projectId);
        if (db._databaseId.projectId !== "quickseva-c0c49") {
          console.warn("⚠️ ProjectID mismatch! Expected: quickseva-c0c49, Got:", db._databaseId.projectId);
        }
      } else {
        console.error("❌ Firebase ProjectID not found - Config might be missing!");
      }

      // 🛒 Convert cart to booking items
      const bookingItems = cartItems.map((item) => ({
        label: item.label || "Service",
        price: typeof item.price === "number" ? item.price : 0,
        qty: typeof item.qty === "number" && item.qty > 0 ? item.qty : 1,
        subtotal: (typeof item.price === "number" ? item.price : 0) * (typeof item.qty === "number" && item.qty > 0 ? item.qty : 1),
      }));

      const rawBookingData = {
        userId: user?.uid || "anonymous",
        userName: user?.name || "Guest",
        phone: user?.phone || null,
        items: bookingItems,
        totalAmount: totalAmount,
        address: address.trim(),
        latitude: latitude ?? null,
        longitude: longitude ?? null,
        date: date,
        time: time.trim(),
        postalCode: postalCode.trim(),
        status: "Pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // 🔥 CRITICAL LINE — this guarantees Firestore acceptance
      const bookingData = firestoreSafe(rawBookingData);

      console.log("📤 FINAL DATA TO FIRESTORE:", bookingData);
      console.log("🔥 Firebase DB instance:", db);

      // ✅ ADD TO FIRESTORE WITH TIMEOUT
      console.log("⏳ Starting Firestore write...");
      
      const submitPromise = addDoc(collection(db, "bookings"), bookingData);
      
      // Set a 20-second timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Firestore write timeout (20s) - Check your internet connection and Firebase configuration")), 20000)
      );

      const docRef = await Promise.race([submitPromise, timeoutPromise]);
      
      console.log("✅ Booking saved with ID:", docRef.id);

      // ✅ NAVIGATE WITH STATE
      const saved = { id: docRef.id, ...bookingData };
      console.log("🚀 Navigating to booking-success with state:", saved);
      
      setIsLoading(false);
      navigate("/booking-success", { state: saved });
    } catch (err) {
      console.error("❌ Firestore Error:", err);
      console.error("Error Code:", err.code);
      console.error("Error Message:", err.message);
      console.error("Full Error Object:", err);
      
      let errorMsg = `Failed to save booking: ${err.message}`;
      
      // Check if browser is offline
      if (!navigator.onLine) {
        errorMsg = "❌ YOU ARE OFFLINE\n\nPlease check your internet connection and try again.";
      } else if (err.message.includes("client is offline")) {
        errorMsg = "❌ FIREBASE OFFLINE\n\nPossible causes:\n• Your internet connection is unstable\n• Firebase servers are unreachable\n• Check your network and try again";
      } else if (err.message.includes("timeout")) {
        errorMsg = "❌ REQUEST TIMEOUT\n\nFirestore is taking too long to respond.\n• Check your internet connection\n• Verify Firebase credentials in .env file\n• Try again in a moment";
      } else if (err.code === "permission-denied") {
        errorMsg = "❌ Permission Denied\n\nFirestore security rules don't allow this write.\n\nContact your admin to check Firestore rules.";
      } else if (err.code === "unavailable") {
        errorMsg = "❌ Service Unavailable\n\nFirebase is temporarily down. Please try again later.";
      } else if (err.code === "unauthenticated") {
        errorMsg = "❌ Not Authenticated\n\nPlease log in again and try.";
      } else if (err.code === "invalid-argument") {
        errorMsg = "❌ Invalid Data\n\nThe booking data format is incorrect.";
      }
      
      setError(errorMsg);
      setIsLoading(false);
      
      // Also show alert for immediate feedback
      alert(errorMsg);
    }
  };

  return (
    <div className="p-4 pb-24 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-3">Book Service</h1>

      {/* ⚠️ ERROR DISPLAY */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="font-semibold">⚠️ Error</p>
          <p className="text-sm mt-1">{error}</p>
          <button
            onClick={() => setError("")}
            className="mt-2 text-sm underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* 🛒 CART SUMMARY */}
      {cartItems.length > 0 && (
        <div className="bg-white p-3 rounded-xl shadow mb-4">
          <h2 className="font-semibold mb-2">Your Cart</h2>

          {cartItems.map((i, idx) => (
            <div key={idx} className="flex justify-between text-sm mb-1">
              <span>
                {i.label} × {i.qty}
              </span>
              <span>₹{(i.price || 0) * (i.qty || 1)}</span>
            </div>
          ))}

          <hr className="my-2" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      )}

      {/* DATE */}
      <div>
        <label className="text-sm block mb-1">Preferred Service Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded mb-2 bg-white"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <LocationCapture
        onLocationDetected={(data) => {
          setAddress(data.address || "");
          setLatitude(data.latitude ?? null);
          setLongitude(data.longitude ?? null);
          setTime(data.time || "");
          if (data.postalCode) setPostalCode(data.postalCode);
        }}
      />

      {address && (
        <div className="mt-4 p-3 rounded bg-green-50 border border-green-200 text-sm">
          <p>
            📍 <b>Address:</b> {address}
          </p>
          {time && (
            <p>
              🕒 <b>Time:</b> {time}
            </p>
          )}
          <div className="mt-2">
            <label className="text-sm block mb-1">
              Postal Code (confirm/edit)
            </label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-40 border p-2 rounded bg-white"
              placeholder="Postal code"
            />
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-0 right-0 px-4 z-50 sm:static sm:px-0">
        <button
          onClick={handleSubmit}
          disabled={isLoading || cartItems.length === 0 || !address || !date || !time || !postalCode}
          className={`w-full py-3 rounded text-white font-semibold transition ${
            isLoading
              ? "bg-gray-500 cursor-wait"
              : cartItems.length > 0 && address && date && time && postalCode
              ? "bg-qsBlue-500 hover:bg-qsBlue-600 active:scale-95"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? "⏳ Processing Booking..." : "Confirm Booking"}
        </button>
        
        {isLoading && (
          <button
            onClick={() => setIsLoading(false)}
            className="w-full mt-2 py-2 rounded text-gray-700 bg-gray-200 hover:bg-gray-300 font-medium transition"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
