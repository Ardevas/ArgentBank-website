import React from "react";
import { useSelector } from "react-redux";
import Account from "../components/account/account";

import userData from "../data/account.json";

export default function User() {
  // useSelector to get the user data from the store
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
  const userId = useSelector((state) => state.userReducer.id);

  // Filter the user accounts from the data
  const userAccounts =
    userData.find((user) => user.userId === userId)?.account || [];

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <button className="edit-button">Edit Name</button>
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
