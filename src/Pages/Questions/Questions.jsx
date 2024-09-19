import { useState } from "react";
import "./Questions.css";
import Button from "../../Components/Button/Button";
import { QuestionsData } from "./QuestionsData";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersStatus, setAnswersStatus] = useState({});

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleAnswerClick = (selectedOption, index) => {
    const correctAnswer = QuestionsData[currentQuestionIndex].correct_answer;
    const newAnswersStatus = { ...answersStatus };

    if (selectedOption === correctAnswer) {
      newAnswersStatus[index] = "correct";
      playAudio("/Correct.mp3");
    } else {
      newAnswersStatus[index] = "incorrect";
      playAudio("/Incorrect.mp3");
    }

    setAnswersStatus(newAnswersStatus);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < QuestionsData.length - 1) {
        playAudio("/Question.mp3");
        setAnswersStatus({});
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex > 0) {
        playAudio("/Question.mp3");
        setAnswersStatus({});
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const currentQuestion = QuestionsData[currentQuestionIndex];

  return (
    <div className="questions">
      <img src="/Logo.webp" alt="Logo" draggable="false" />
      <div className="question-box">
        <Button question={true} name={currentQuestion.question} />
        <div className="answers-container">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              name={String.fromCharCode(65 + index) + ": " + option}
              onClick={() => handleAnswerClick(option, index)}
              colorClass={
                answersStatus[index] === "correct"
                  ? "correct"
                  : answersStatus[index] === "incorrect"
                  ? "incorrect"
                  : ""
              }
            />
          ))}
        </div>
        <div className="chooseQuestion">
          <div className="previous" onClick={handlePrevious}>
            <i className="fa-solid fa-angle-left" />
          </div>
          <div className="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
