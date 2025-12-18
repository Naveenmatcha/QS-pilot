import React from "react";

export const QSCard = ({ children, className = "" }) => (
  <div className={`p-4 bg-white rounded-qs shadow-qsm border border-qsGray-border ${className}`}>
    {children}
  </div>
);
