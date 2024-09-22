import { useState } from "react";
import "./WildCard.css";

const WildCard = ({ icon, text, onClick }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) return;

    if (onClick) {
      onClick();
    }

    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 30000);
  };

  return (
    <div className="wildcard-container">
      <button
        className={isDisabled ? "wildcard disabled" : "wildcard"}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {icon}
      </button>
      <p className="name-wildcard">{text}</p>
    </div>
  );
};

export default WildCard;
