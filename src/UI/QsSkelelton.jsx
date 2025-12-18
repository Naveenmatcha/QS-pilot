import React from "react";



export default function QsSkeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
}
