import { useEffect, useState } from "react";
import "./TimeLine.css";

const TimeLine = ({ questionCount, currentQuestionIndex }) => {
  const [numbers, setNumbers] = useState([]);
  const amounts = [];
  let baseAmount = 100000;

  for (let i = 0; i < questionCount; i++) {
    amounts.push(baseAmount);
    baseAmount *= 2;
  }

  useEffect(() => {
    const initialNumbers = amounts.map((_, index) => index + 1);
    setNumbers(initialNumbers);
  }, [amounts]);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="line"></div>
        {amounts.map((amount, index) => (
          <p
            key={index}
            className={`cost ${index === currentQuestionIndex ? "active" : ""}`}
          >
            <span className="number">{numbers[index]}</span>
            <span className="dolar">$</span>
            {amount.toLocaleString("es-CO")}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
