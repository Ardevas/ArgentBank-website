import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting to '/'");
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
