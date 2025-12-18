import React from "react";




export default function QSServiceSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="p-4 bg-white rounded-xl shadow border animate-pulse"
        >
          <div className="w-14 h-14 bg-gray-300 rounded mx-auto" />
          <div className="mt-2 h-3 bg-gray-300 rounded w-20 mx-auto" />
        </div>
      ))}
    </div>
  );
}
