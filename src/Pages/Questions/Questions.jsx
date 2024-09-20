import { useState } from "react";
import "./Questions.css";
import Button from "../../Components/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import TimeLine from "../../Components/TimeLine/TimeLine";
import { QuestionsData } from "./QuestionsData";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersStatus, setAnswersStatus] = useState({});
  const [disableAnswers, setDisableAnswers] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleAnswerClick = (selectedOption, index) => {
    if (disableAnswers) return;

    const correctAnswer = QuestionsData[currentQuestionIndex].correct_answer;
    const newAnswersStatus = { ...answersStatus };

    if (selectedOption === correctAnswer) {
      newAnswersStatus[index] = "correct";
      playAudio("/Correct.mp3");
      setDisableAnswers(true);
      setShowNextButton(true);
      setStopTimer(true);
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
        setDisableAnswers(false);
        setShowNextButton(false);
        setStopTimer(false);
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handleTimeUp = () => {
    playAudio("/Incorrect.mp3");
    setDisableAnswers(true);
    setShowNextButton(true);
  };

  const currentQuestion = QuestionsData[currentQuestionIndex];
  const questionCount = QuestionsData.length;

  return (
    <div className="questions">
      <TimeLine
        questionCount={questionCount}
        currentQuestionIndex={currentQuestionIndex}
      />
      <CountDown
        key={currentQuestionIndex}
        seconds={20}
        stopTimer={stopTimer}
        onTimeUp={handleTimeUp}
      />
      <img
        src="/Logo.webp"
        alt="Logo"
        draggable="false"
        className="transition"
      />
      <img src="/Logo.webp" alt="Logo" draggable="false" className="image" />
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
          {showNextButton && (
            <div
              className="next"
              onClick={handleNext}
              title="Siguiente Pregunta"
            >
              <i className="fa-solid fa-angle-right" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
