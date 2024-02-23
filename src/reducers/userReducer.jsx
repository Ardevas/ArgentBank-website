const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_PROFILE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
