import React from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";

// RENDER COMPONENTS
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import User from "./pages/user";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./styles/main.css";

// REDUX
import { Provider } from "react-redux";
import store from "./store/store";
import { loadToken } from "./actions/authActions";
import { fetchUserProfile } from "./actions/userProfile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Récupération du token depuis le local storage
    if (token) {
      // S'il y a un token dans le local storage, le charger dans le store Redux
      dispatch(loadToken(token));
      dispatch(fetchUserProfile());
    }
  }, [dispatch]); // Assurez-vous de ne lancer cette action qu'une seule fois au chargement de l'application

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
