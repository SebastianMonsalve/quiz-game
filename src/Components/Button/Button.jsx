import "./Button.css";

const Button = ({ name, font, onClick, question, colorClass }) => {
  return (
    <button
      className={question ? "button-container-question" : "button-container"}
      onClick={onClick}
    >
      <div className={question ? "button-question" : `button ${colorClass}`}>
        <p>{name}</p>
      </div>
    </button>
  );
};

export default Button;
