import { useEffect, useRef, useState } from "react";
import "./CountDown.css";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({ seconds, stopTimer, onTimeUp }) {
  const [countdown, setCountdown] = useState(seconds);
  const [isDelayed, setIsDelayed] = useState(true);
  const timerId = useRef();

  useEffect(() => {
    setCountdown(seconds);
    setIsDelayed(true);
    clearInterval(timerId.current);

    const delayTimeout = setTimeout(() => {
      setIsDelayed(false);
      timerId.current = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timerId.current);
    };
  }, [seconds]);

  useEffect(() => {
    if (stopTimer) {
      clearInterval(timerId.current);
    }
  }, [stopTimer]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
      if (onTimeUp) onTimeUp();
    }
  }, [countdown, onTimeUp]);

  const countdownClass =
    countdown <= 3 && !isDelayed ? "countdown danger" : "countdown";

  return (
    <div className={countdownClass}>
      <i className="fa-regular fa-clock" />
      <p>{isDelayed ? formatTime(seconds) : formatTime(countdown)}</p>
    </div>
  );
}
