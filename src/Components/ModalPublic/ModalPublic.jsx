import "./ModalPublic.css";

const ModalPublic = ({ onClose }) => {
  return (
    <div className="modalpublic">
      <div className="modalpublic-container">
        <h2>Encuesta al público</h2>
        <div className="graph">
          <div className="column A">
            <p>A</p>
          </div>
          <div className="column B">
            <p>B</p>
          </div>
          <div className="column C">
            <p>C</p>
          </div>
          <div className="column D">
            <p>D</p>
          </div>
        </div>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  );
};

export default ModalPublic;
