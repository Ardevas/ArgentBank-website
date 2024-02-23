export const fetchUserProfile = () => {
  return async (dispatch, getState) => {
    try {
      // Obtenir le token d'authentification du store
      const token = getState().authReducer.token;

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Assurez-vous d'inclure le token d'authentification si nécessaire
            Authorization: `Bearer ${token}`,
          },
          // Assurez-vous de passer les données de l'utilisateur s'il y en a
          body: JSON.stringify({
            // Données de l'utilisateur si nécessaire
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du profil utilisateur");
      }

      const data = await response.json();
      // Dispatchez une action pour stocker les données du profil dans le store si nécessaire
      dispatch(saveUserProfile(data.body));

      // Utilisez les données récupérées comme nécessaire
      console.log("Profil utilisateur:", data.body);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
};

export const saveUserProfile = (profileData) => ({
  type: "SAVE_USER_PROFILE",
  payload: profileData,
});
