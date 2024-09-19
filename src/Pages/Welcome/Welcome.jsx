import React from "react";
import "./Welcome.css";
import Button from "../../Components/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const instructionsClick = () => {
    navigate("/instructions");
  };
  const questionsClick = () => {
    navigate("/questions");
  };
  return (
    <div className="welcome">
      <img
        src="/Logo.webp"
        alt="Quien quiere ser millonario logo"
        className="logo"
        draggable="false"
      />
      <div className="button-welcome-container">
        <Button name="Instrucciones" onClick={instructionsClick} />
        <Button name="Jugar" onClick={questionsClick} />
      </div>
      <a
        href="https://sebastianmonsalve.netlify.app/"
        target="_blank"
        className="author"
      >
        <p>Desarrollado por</p>
        <img
          src="/SebasMonsalve.webp"
          alt="SebasMonsalveLogo"
          draggable="false"
        />
        <span>
          Sebastian <br />
          Monsalve
        </span>
      </a>
    </div>
  );
};

export default Welcome;
