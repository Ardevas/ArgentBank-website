import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArgentBankLogo from "../assets/argentBankLogo.webp";
import { logout } from "../actions/authActions";

export default function Header() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const firstName = useSelector((state) => state.userReducer.firstName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {!isAuthenticated ? (
        <div className="main-nav-items">
          <a className="main-nav-item" href="./sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      ) : (
        <div className="main-nav-items">
          <a className="main-nav-item" href="./user">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </a>
          <a className="main-nav-item" href="./" onClick={handleLogout}>
            Sign Out
          </a>
        </div>
      )}
    </nav>
  );
}
