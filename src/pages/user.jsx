import React from "react";
import Account from "../components/account/account";
import userData from "../data/account.json";

export default function User() {
  const currentUser = userData.find((user) => user.userId === "1");
  const accounts = currentUser ? currentUser.account : [];

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts &&
          accounts.map((account, index) => (
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
