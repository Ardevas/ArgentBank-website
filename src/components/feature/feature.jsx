import React from "react";

export default function Feature({ image, title, description }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={image} alt="Chat Icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
