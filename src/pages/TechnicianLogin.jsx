import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TechnicianLogin() {
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const login = () => {
    const techs = JSON.parse(localStorage.getItem("technicians") || "[]");
    const tech = techs.find((t) => t.phone === phone);

    if (!tech) {
      alert("Technician not found");
      return;
    }

    localStorage.setItem("technician", JSON.stringify(tech));
    nav("/tech"); // ✅ always navigate to Technician Dashboard
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6">

        {/* QS Branding Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-qsBlue-600">Technician Login</h2>
          <p className="text-gray-500 text-sm mt-1">
            Login to continue your assigned jobs
          </p>
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Enter Technician Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-xl mb-3 bg-gray-50 focus:ring-2 focus:ring-qsBlue-500 outline-none"
        />

        {/* Login Button */}
        <button
          onClick={login}
          className="w-full p-3 bg-qsBlue-500 hover:bg-qsBlue-600 transition text-white rounded-xl font-semibold shadow"
        >
          Login
        </button>

        {/* Back */}
        <button
          onClick={() => nav(-1)}
          className="w-full mt-3 p-2 text-gray-600 text-sm"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
