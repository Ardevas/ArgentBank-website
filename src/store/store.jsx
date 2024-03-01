import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = {
  authReducer,
  userReducer,
};

// Don't forget to remove the devTools option when you're ready to deploy your app !
const store = configureStore({ reducer: rootReducer, devTools: true });

export default store;
