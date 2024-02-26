import React from "react";

export default function Loading({ error }) {
  return (
    <div className="loading">
      <main>{error && <p style={{ color: "red" }}>{error}</p>}</main>
    </div>
  );
}
