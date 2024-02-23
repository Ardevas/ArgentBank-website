export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.username,
          password: credentials.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;

        // Dispatch action to save token in store
        dispatch(saveToken(token));

        // Dispatch action to load token in store
        dispatch(loadToken(token));

        // Dispatch LOGIN_SUCCESS to update isAuthenticated state
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { message: data.message, token: token },
        });
      } else {
        const error = await response.json();
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
};

const saveToken = (token) => {
  localStorage.setItem("token", token); // Stock token in local storage
  return {
    type: "SAVE_TOKEN",
    payload: token,
  };
};

export const loadToken = (token) => ({
  type: "LOAD_TOKEN",
  payload: token,
});

export const removeToken = () => {
  localStorage.removeItem("token"); // Delete token from local storage
  return {
    type: "LOGOUT",
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(removeToken());

      // Update isAuthenticated state
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
};
