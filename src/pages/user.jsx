import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../actions/userActions";
import Account from "../components/account/account";

import userData from "../data/account.json";

export default function User() {
  // useSelector to get the user data from the store
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
  const userId = useSelector((state) => state.userReducer.id);
  const userName = useSelector((state) => state.userReducer.userName);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(""); // Initialize with an empty string

  // Filter the user accounts from the data
  const userAccounts =
    userData.find((user) => user.userId === userId)?.account || [];

  const dispatch = useDispatch();

  // Function to handle the edit name button
  const handleEditName = () => {
    setIsEditing(true);
    // Initialize newUserName with the current userName when editing starts
    setNewUserName(userName);
  };

  const handleSave = () => {
    dispatch(updateUserProfile(userId, newUserName));
    // After saving, reset the isEditing state to false
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the input field with the current userName
    setNewUserName(userName);
  };

  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value);
  };

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <h1>Edit user info</h1>
          ) : (
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}
            </h1>
          )}
          {isEditing ? (
            <>
              <div className="edit-inputs">
                <div className="edit-inputs-label">
                  <p>User name:</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={newUserName}
                    onChange={handleUserNameChange}
                  />
                </div>
                <div className="edit-inputs-label">
                  <p>First name:</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={firstName}
                    disabled
                  />
                </div>
                <div className="edit-inputs-label">
                  <p>Last name:</p>
                  <input
                    className="edit-input"
                    type="text"
                    value={lastName}
                    disabled
                  />
                </div>
              </div>
              <div>
                <button className="edit-button" onClick={handleSave}>
                  Save
                </button>
                <button className="edit-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <button className="edit-button" onClick={handleEditName}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {userAccounts.map((account, index) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
    </div>
  );
}
