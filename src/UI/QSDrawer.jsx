import React from "react";
import { useNavigate } from "react-router-dom";

export default function QSDrawer({ open, setOpen, user }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Menu</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="mt-4 space-y-2">
            <button onClick={() => navigate("/my")} className="w-full text-left p-2 rounded hover:bg-qsGray-light">My Bookings</button>
            <button onClick={() => navigate("/profile")} className="w-full text-left p-2 rounded hover:bg-qsGray-light">Profile</button>
            {!user && <button onClick={() => navigate("/login")} className="w-full text-left p-2 rounded hover:bg-qsGray-light">Login</button>}
            {user && <button onClick={() => { localStorage.removeItem("user"); navigate("/"); }} className="w-full text-left p-2 rounded text-red-500">Logout</button>}
          </div>
        </div>
      </div>
      {open && <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)} />}
    </>
  );
}
