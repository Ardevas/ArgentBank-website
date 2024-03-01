import React from "react";
import { useSelector } from "react-redux";
import SignIn from "../pages/signIn";

export default function PrivateRoute({ children }) {
  const token = useSelector((state) => state.authReducer.token);

  if (token) {
    return children;
  }

  return <SignIn />;
}
