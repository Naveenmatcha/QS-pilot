import React from "react";

export const QSButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`w-full p-3 rounded-qs font-semibold text-white bg-qsBlue-500 hover:bg-qsBlue-600 transition ${className}`}
  >
    {children}
  </button>
);
