import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (!/^\d{10}$/.test(phone)) { alert("Enter 10-digit phone"); return; }
    localStorage.setItem("temp_phone", phone);
    nav("/otp");
  };

  return (
    <div className="p-4 pb-28 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold">Login / Signup</h2>
      <p className="text-sm text-gray-600 mt-2">We'll send an OTP to this number</p>
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number" className="mt-4 w-full p-3 rounded-qs border" />
      <button onClick={handleContinue} className="w-full mt-4 p-3 rounded-qs bg-qsBlue-500 text-white">Continue</button>
    </div>
  );
}
