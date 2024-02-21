import React from "react";
import Login from "../components/login/login";

export default function SignIn() {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Login />
        </section>
      </main>
    </div>
  );
}
