import React from "react";
import "./Button.css";

const Button = ({ name, font, onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>
      <div className="button">
        <p>{name}</p>
      </div>
    </button>
  );
};

export default Button;
