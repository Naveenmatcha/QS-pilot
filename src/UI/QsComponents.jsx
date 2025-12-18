// src/components/QSComponents.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export const QSButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-qs shadow-sm text-white bg-qsBlue-500 hover:bg-qsBlue-600 ${className}`}
  >
    {children}
  </button>
);

export const QSOutlineButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-qs border border-qsBlue-200 text-qsBlue-700 bg-white ${className}`}
  >
    {children}
  </button>
);

export const QSInput = (props) => (
  <input
    {...props}
    className={`w-full p-3 border rounded-qs bg-qsGray-light border-qsGray-border focus:ring-2 focus:ring-qsBlue-300 outline-none ${props.className || ""}`}
  />
);

export const QSSelect = (props) => (
  <select
    {...props}
    className={`w-full p-3 border rounded-qs bg-qsGray-light border-qsGray-border focus:ring-2 focus:ring-qsBlue-300 outline-none ${props.className || ""}`}
  />
);

export const QSCard = ({ children, className = "" }) => (
  <div className={`p-4 bg-white rounded-qs shadow-qsm border border-qsGray-border ${className}`}>
    {children}
  </div>
);

export const QSHeader = ({ title, left, right }) => (
  <div className="flex items-center justify-between gap-4">
    <div>{left}</div>
    <h1 className="text-2xl font-bold text-qsBlue-800">{title}</h1>
    <div>{right}</div>
  </div>
);

export const QSBottomNav = () => {
  const nav = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm py-2 flex justify-around z-50">
      <button onClick={() => nav("/")} className="flex flex-col items-center text-sm">
        <div className="text-2xl">🏠</div>
        <div>Home</div>
      </button>
      <button onClick={() => nav("/my")} className="flex flex-col items-center text-sm">
        <div className="text-2xl">📘</div>
        <div>Bookings</div>
      </button>
      <button onClick={() => nav("/profile")} className="flex flex-col items-center text-sm">
        <div className="text-2xl">👤</div>
        <div>Profile</div>
      </button>
    </div>
  );
};
