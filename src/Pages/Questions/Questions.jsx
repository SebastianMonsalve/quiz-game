import { useState, useRef } from "react";
import "./Questions.css";
import Button from "../../Components/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import TimeLine from "../../Components/TimeLine/TimeLine";
import Joker from "../../Components/Joker/Joker";
import ModalTeacher from "../../Components/ModalTeacher/ModalTeacher";
import ModalFriend from "../../Components/ModalFriend/ModalFriend";
import ModalPublic from "../../Components/ModalPublic/ModalPublic";
import { QuestionsData } from "./QuestionsData";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersStatus, setAnswersStatus] = useState({});
  const [disableAnswers, setDisableAnswers] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isFriendModalOpen, setIsFriendModalOpen] = useState(false);
  const [isPublicModalOpen, setIsPublicModalOpen] = useState(false);
  const [timeUpSoundPlayed, setTimeUpSoundPlayed] = useState(false); // Nueva bandera

  const addTimeRef = useRef(null);

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
        setHiddenOptions([]);
        setTimeUpSoundPlayed(false); // Restablece la bandera para la próxima pregunta
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handleTimeUp = () => {
    if (!timeUpSoundPlayed) {
      // Solo reproducir sonido si no se ha reproducido ya
      playAudio("/Incorrect.mp3");
      setTimeUpSoundPlayed(true); // Marca que el sonido ya fue reproducido
    }
    setShowNextButton(true);
  };

  const handleRemoveTwoOptions = () => {
    const correctAnswer = QuestionsData[currentQuestionIndex].correct_answer;
    const incorrectOptions = QuestionsData[currentQuestionIndex].options.filter(
      (option) => option !== correctAnswer
    );
    const optionsToHide = incorrectOptions
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    setHiddenOptions(optionsToHide);
  };

  const handleCallToTeacher = () => {
    setIsTeacherModalOpen(true);
    playAudio("/Call.mp3");
    if (addTimeRef.current) {
      addTimeRef.current(20);
    }
  };

  const handleCallToFriend = () => {
    setIsFriendModalOpen(true);
    playAudio("/Call.mp3");
    if (addTimeRef.current) {
      addTimeRef.current(20);
    }
  };

  const handlePublicHelp = () => {
    setIsPublicModalOpen(true);
    playAudio("/Public.mp3");
    if (addTimeRef.current) {
      addTimeRef.current(20);
    }
  };

  const handleCloseCallToTeacher = () => {
    setIsTeacherModalOpen(false);
    playAudio("/HangUp.mp3");
  };

  const handleCloseCallToFriend = () => {
    setIsFriendModalOpen(false);
    playAudio("/HangUp.mp3");
  };

  const handleClosePublicHelp = () => {
    setIsPublicModalOpen(false);
    playAudio("/fifty.mp3");
  };

  const currentQuestion = QuestionsData[currentQuestionIndex];
  const questionCount = QuestionsData.length;

  return (
    <div className="questions">
      <TimeLine
        questionCount={questionCount}
        currentQuestionIndex={currentQuestionIndex}
      />
      <Joker
        removeTwoOptions={handleRemoveTwoOptions}
        callToTeacher={handleCallToTeacher}
        callToFriend={handleCallToFriend}
        publicHelp={handlePublicHelp}
      />
      <CountDown
        key={currentQuestionIndex}
        seconds={30}
        stopTimer={stopTimer}
        onTimeUp={handleTimeUp}
        addTimeRef={addTimeRef}
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
                hiddenOptions.includes(option)
                  ? "hidden"
                  : answersStatus[index] === "correct"
                  ? "correct"
                  : answersStatus[index] === "incorrect"
                  ? "incorrect"
                  : ""
              }
              disabled={hiddenOptions.includes(option)}
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

      {isTeacherModalOpen && (
        <ModalTeacher onClose={handleCloseCallToTeacher} />
      )}
      {isFriendModalOpen && <ModalFriend onClose={handleCloseCallToFriend} />}
      {isPublicModalOpen && <ModalPublic onClose={handleClosePublicHelp} />}
    </div>
  );
};

export default Questions;
