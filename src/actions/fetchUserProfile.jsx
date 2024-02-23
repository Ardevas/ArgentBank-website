export const fetchUserProfile = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().authReducer.token;

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du profil utilisateur");
      }

      const data = await response.json();
      dispatch(saveUserProfile(data.body));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
};

export const saveUserProfile = (profileData) => ({
  type: "SAVE_USER_PROFILE",
  payload: profileData,
});
