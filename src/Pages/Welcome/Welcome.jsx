import "./Welcome.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const instructionsClick = () => {
    navigate("/instructions");
  };
  const questionsClick = () => {
    navigate("/questions");
  };
  const playAudio = () => {
    const audio = new Audio("/Begin.mp3");
    audio.play();
  };
  const instructionsAudio = () => {
    const audio = new Audio("/Statistics.mp3");
    audio.play();
  };
  return (
    <div className="welcome">
      <div className="bg"></div>
      {/* <img src="/stars.webp" alt="stars" className="bg" /> */}
      <img
        src="/Logo.webp"
        alt="Quien quiere ser millonario logo"
        className="logo"
        draggable="false"
      />
      <div className="button-welcome-container">
        <Button
          name="Instrucciones"
          onClick={() => {
            instructionsClick();
            instructionsAudio();
          }}
        />
        <Button
          name="Jugar"
          onClick={() => {
            questionsClick();
            playAudio();
          }}
        />
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
