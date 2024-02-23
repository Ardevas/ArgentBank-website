import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading/loading";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.authReducer.token);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  // console.log("token:", token);
  // console.log("isLoading:", isLoading);

  if (token && !isLoading) {
    return children;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <Navigate to="/" />;
}
