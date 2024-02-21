const initialState = {
  isAuthenticated: false,
  message: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload.message,
        token: action.payload.token,
        error: null,
        redirect: "/user",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        message: null,
        token: null,
        error: action.payload,
        redirect: "/",
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        message: null,
        token: null,
        error: null,
        redirect: "/",
      };
    default:
      return state;
  }
};

export default authReducer;
