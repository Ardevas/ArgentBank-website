import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = {
  authReducer,
  userReducer,
};

const store = configureStore({ reducer: rootReducer, devTools: true });

export default store;
