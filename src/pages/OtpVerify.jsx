import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const nav = useNavigate();
  const { login } = useAuth();

  const handleVerify = () => {
    if (otp !== "123") {
      alert("Incorrect OTP");
      return;
    }

    const user = {
      uid: Date.now().toString(),
      name: "QuickSeva User",
      phone: localStorage.getItem("temp_phone"),
    };

    login(user);
    nav("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">OTP Verification</h2>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="mt-4 w-full p-3 border rounded"
      />
      <button
        onClick={handleVerify}
        className="mt-4 w-full p-3 bg-qsBlue-500 text-white rounded"
      >
        Verify
      </button>
    </div>
  );
}
