import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneLogin() {
  const nav = useNavigate();
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    // store phone temporarily for OTP step
    localStorage.setItem("temp_phone", phone);

    // go to OTP screen
    nav("/otp");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">

      {/* HEADER */}
      <div className="w-full bg-qsBlue-500 text-white p-4 rounded-b-3xl shadow flex items-center gap-3">
        <button
          onClick={() => nav(-1)}
          className="p-2 rounded-full bg-white text-qsBlue-600 shadow"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold">Login</h2>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-md mt-14 text-center">
        <h1 className="text-2xl font-bold">Welcome to QuickSeva</h1>
        <p className="text-gray-500 mt-2">
          Fast, trusted and professional services at your doorstep.
        </p>

        {/* PHONE INPUT */}
        <input
          type="tel"
          placeholder="Enter 10-digit phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mt-8 p-4 border rounded-xl text-lg"
        />

        {/* CONTINUE BUTTON */}
        <button
          onClick={handleContinue}
          className="w-full mt-6 p-4 rounded-full bg-gradient-to-r from-qsBlue-400 to-qsBlue-600 text-white text-lg shadow-lg"
        >
          Continue with Phone Number
        </button>

        {/* GUEST OPTION */}
        <button
          onClick={() => nav("/")}
          className="w-full mt-4 p-3 border rounded-full text-gray-700"
        >
          Continue without login
        </button>

        <p className="text-xs text-gray-500 mt-5">
          By continuing, you agree to our<br />
          <span className="text-qsBlue-500">Terms of Service</span> &{" "}
          <span className="text-qsBlue-500">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
