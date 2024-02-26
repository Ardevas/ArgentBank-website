import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../pages/signIn";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.authReducer.token);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  if (token && !isLoading) {
    return children;
  }

  if (!token && isLoading) {
    return <SignIn />;
  }

  return <Navigate to="/" />;
}
