import "./Statistics.css";
import { useNavigate } from "react-router-dom";

const Statistics = ({
  correctAnswers,
  incorrectAnswers,
  publicHelpUsed,
  friendHelpUsed,
  teacherHelpUsed,
  fiftyFiftyUsed,
  totalTime,
}) => {
  const navigate = useNavigate();

  const totalAnswers = correctAnswers + incorrectAnswers;
  const correctPercentage =
    totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0;

  const minutes = Math.floor(totalTime / 60);
  const seconds = Math.floor(totalTime % 60);

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="statistics">
      <img
        src="https://res.cloudinary.com/dnalicrjk/image/upload/v1715961099/Assets/6SSp_1_qflsge.gif"
        alt="confetti"
        className="confetti"
      />
      <div className="statistics-container">
        <h2>Estadísticas del Juego</h2>
        <table className="statistics-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Respuestas Correctas</td>
              <td>{correctAnswers}</td>
            </tr>
            <tr>
              <td>Respuestas Incorrectas</td>
              <td>{incorrectAnswers}</td>
            </tr>
            <tr>
              <td>Porcentaje de Aciertos</td>
              <td>{correctPercentage.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Ayudas del Público</td>
              <td>{publicHelpUsed}</td>
            </tr>
            <tr>
              <td>Ayudas de un Amigo</td>
              <td>{friendHelpUsed}</td>
            </tr>
            <tr>
              <td>Ayudas de la Profesora</td>
              <td>{teacherHelpUsed}</td>
            </tr>
            <tr>
              <td>50:50 Usado</td>
              <td>{fiftyFiftyUsed}</td>
            </tr>
            <tr>
              <td>Tiempo Total</td>
              <td>{formattedTime}</td>
            </tr>
          </tbody>
        </table>
        <button title="Regresar al home" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-house" />
        </button>
      </div>
    </div>
  );
};

export default Statistics;
