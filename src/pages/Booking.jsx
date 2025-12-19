import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// 🔥 Firebase imports
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [context, setContext] = useState(null);

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("");
  const [address, setAddress] = useState("");

  /* ================= MOBILE-SAFE CONTEXT LOAD ================= */
  useEffect(() => {
    if (location.state) {
      setContext(location.state);
      localStorage.setItem(
        "qs_booking_context",
        JSON.stringify(location.state)
      );
      return;
    }

    const saved = localStorage.getItem("qs_booking_context");
    if (saved) {
      setContext(JSON.parse(saved));
      return;
    }

    navigate("/");
  }, [location.state, navigate]);

  if (!context) {
    return <div className="p-4 animate-pulse">Loading…</div>;
  }

  const { service, subService, price } = context;

  const submitBooking = async () => {
    if (!date || !hour || !minute || !period || !address) {
      alert("Please fill all details");
      return;
    }

    const time12 = `${hour}:${minute} ${period}`;

    const booking = {
      userId: user?.uid || "guest",
      service,
      subService,
      price,
      date,
      time: time12,
      address,
      status: "Pending",
      phone: user?.phone || "Guest",
      createdAt: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "bookings"), booking);

      navigate("/booking-success", {
        state: { bookingId: docRef.id },
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-4 pb-28 bg-gray-50 min-h-screen">
      {/* 🧾 SERVICE SUMMARY WITH PRICE */}
      <div className="mb-6 p-4 rounded-xl border bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800">{service}</p>
            <h2 className="text-sm text-gray-600">{subService}</h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Service Charge</p>
            <p className="text-lg font-bold text-qsBlue-500">{price}</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Final price may change if extra work is required.
        </p>
      </div>

      {/* 📅 DATE */}
      <label className="text-sm text-gray-600">Select Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 mb-4 border rounded bg-white"
      />

      {/* ⏰ TIME */}
      <label className="text-sm text-gray-600">Select Time</label>
      <div className="flex gap-2 mb-4">
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="flex-1 p-3 border rounded bg-white"
        >
          <option value="">HH</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>

        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="flex-1 p-3 border rounded bg-white"
        >
          <option value="">MM</option>
          {["00", "15", "30", "45"].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="flex-1 p-3 border rounded bg-white"
        >
          <option value="">AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>

      {/* 📍 ADDRESS */}
      <label className="text-sm text-gray-600">Service Address</label>
      <textarea
        placeholder="Enter full address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 mb-4 border rounded bg-white"
      />

      {/* ✅ PLACE ORDER */}
      <button
        onClick={submitBooking}
        className="w-full p-3 bg-qsBlue-500 text-white rounded font-semibold"
      >
        Place Order
      </button>
    </div>
  );
}
