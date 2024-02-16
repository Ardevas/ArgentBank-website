import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import featureReducer from "./feature.reducer";

export default combineReducers({
  userReducer,
  featureReducer,
});
