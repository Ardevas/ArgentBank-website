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
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        message: null,
        token: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        message: null,
        token: null,
        error: null,
      };
    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "LOAD_TOKEN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
