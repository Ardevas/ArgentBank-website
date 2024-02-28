const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
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
