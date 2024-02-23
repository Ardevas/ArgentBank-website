const initialState = {
  isAuthenticated: false,
  message: null,
  token: null,
  isLoading: true,
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
        isLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        message: null,
        token: null,
        isLoading: true,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        message: null,
        token: null,
        isLoading: false,
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
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
