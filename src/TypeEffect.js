import React from "react";
import "./TypeEffect.css";

function TypeEffect({ displayName, sendMessage }) {
  return (
    <div className="typeEffect">
      <p>{displayName}:</p>
      <div className="typeEffect__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default TypeEffect;
