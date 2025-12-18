import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowGuest = false }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  // ✅ Allow guest access if enabled
  if (!user && allowGuest) {
    return children;
  }

  // ❌ Block unauthenticated users
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}
