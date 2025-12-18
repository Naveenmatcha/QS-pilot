import React from "react";

export default function QSServiceCard({ label, Icon, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer p-4 bg-white rounded-qs shadow-qsm border border-qsGray-border text-center">
      {Icon && <Icon className="w-8 h-8 mx-auto text-qsBlue-500" />}
      <div className="mt-2 text-sm font-medium">{label}</div>
    </div>
  );
}
