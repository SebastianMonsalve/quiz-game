import { useEffect, useState, useMemo } from "react";
import "./TimeLine.css";

const TimeLine = ({ questionCount, currentQuestionIndex }) => {
  const [numbers, setNumbers] = useState([]);

  // Memoriza amounts para que no se recalculen en cada render
  const amounts = useMemo(() => {
    const newAmounts = [];
    let baseAmount = 100000;
    for (let i = 0; i < questionCount; i++) {
      newAmounts.push(baseAmount);
      baseAmount *= 2;
    }
    return newAmounts;
  }, [questionCount]);

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
