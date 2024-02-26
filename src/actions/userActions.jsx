import { saveUserProfile } from "./fetchUserProfile";

export const updateUserProfile = (userId, newUserName) => {
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
          body: JSON.stringify({ userName: newUserName }), // Envoyer uniquement le userName
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }

      const data = await response.json();

      // Dispatch une action pour mettre à jour le profil utilisateur dans le store si nécessaire
      dispatch(saveUserProfile(data.body));

      // Afficher un message de succès ou effectuer d'autres actions nécessaires
    } catch (error) {
      console.error("Error updating user profile:", error);
      // Gérer les erreurs de mise à jour du profil utilisateur
    }
  };
};
