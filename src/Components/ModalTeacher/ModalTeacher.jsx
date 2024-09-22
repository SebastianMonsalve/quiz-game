import { useState, useEffect } from "react";
import "./ModalTeacher.css";

const ModalTeacher = ({ onClose }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className="modalteacher">
      <div className="modalteacher-container">
        <img src="/teacher.webp" alt="teacher picture" draggable="false" />
        <h1>Profe Sandra</h1>
        <p className="number-call">312 345 56 67</p>
        <p className="timer-call">{formatTime(secondsElapsed)}</p>
        <button onClick={onClose}>
          <i className="fa-solid fa-phone-slash" />
        </button>
      </div>
    </div>
  );
};

export default ModalTeacher;
