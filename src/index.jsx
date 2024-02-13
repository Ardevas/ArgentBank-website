import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import SignIn from "./pages/signIn";
import User from "./pages/user";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
