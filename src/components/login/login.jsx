import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
import { fetchUserProfile } from "../../actions/fetchUserProfile";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Update credentials state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(credentials));
    await dispatch(fetchUserProfile());
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            label="Username"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <input
            label="Password"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
