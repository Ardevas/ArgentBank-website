const login = (credentials) => {
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
        // console.log(data.message, token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { message: data.message, token: token },
        });
        // console.log("Action LOGIN_SUCCESS dispatchée avec succès");
      } else {
        const error = await response.json();
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
        // console.log("Action LOGIN_FAILURE dispatchée avec succès");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
};

export default login;
