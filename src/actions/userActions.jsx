import { saveUserProfile } from "./fetchUserProfile";

export const updateUserProfile = (_, newUserName) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().authReducer.token;

      const response = await fetch(
        `http://localhost:3001/api/v1/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }), // Send the new user name
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }

      const data = await response.json();

      // Dispatch action to save the updated user profile in the store
      dispatch(saveUserProfile(data.body));

      // Display a success message to the user
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
};
