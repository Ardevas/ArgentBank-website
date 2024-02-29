import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/signIn";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.authReducer.token);

  if (token) {
    return children;
  }

  if (!token) {
    return <SignIn />;
  }

  return <Navigate to="/" />;
}
