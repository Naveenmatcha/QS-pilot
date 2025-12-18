import React from "react";

export const QSInput = (props) => (
  <input
    {...props}
    className={`w-full p-3 border rounded-qs bg-qsGray-light border-qsGray-border focus:ring-2 focus:ring-qsBlue-300 outline-none ${props.className || ""}`}
  />
);

export const QSTextarea = (props) => (
  <textarea
    {...props}
    className={`w-full p-3 border rounded-qs bg-qsGray-light border-qsGray-border focus:ring-2 focus:ring-qsBlue-300 outline-none ${props.className || ""}`}
  />
);

export const QSSelect = (props) => (
  <select {...props} className={`w-full p-3 border rounded-qs bg-qsGray-light border-qsGray-border ${props.className || ""}`}>
    {props.children}
  </select>
);
