import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_PHONE = "7661045308"; // ✅ Your Admin Number

export default function AdminLogin() {
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const login = () => {
    if (phone === ADMIN_PHONE) {
      localStorage.setItem("admin", "true");
      nav("/admin");
    } else {
      alert("Not authorized as admin");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>

      <input
        placeholder="Enter Admin Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 border rounded mb-3"
      />

      <button
        onClick={login}
        className="w-full p-3 bg-qsBlue-500 text-white rounded"
      >
        Login as Admin
      </button>
    </div>
  );
}
