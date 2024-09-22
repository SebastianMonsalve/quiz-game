import { useState, useEffect } from "react";
import "./ModalFriend.css";

const ModalFriend = ({ onClose }) => {
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
    <div className="modalfriend">
      <div className="modalfriend-container">
        <img src="/friend.webp" alt="friend picture" draggable="false" />
        <h1>SPAM</h1>
        <p className="number-call">321 987 76 65</p>
        <p className="timer-call">{formatTime(secondsElapsed)}</p>
        <button onClick={onClose}>
          <i className="fa-solid fa-phone-slash" />
        </button>
      </div>
    </div>
  );
};

export default ModalFriend;
