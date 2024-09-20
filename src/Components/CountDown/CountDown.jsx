import { useEffect, useRef, useState } from "react";
import "./CountDown.css";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    setCountdown(seconds);
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [seconds]);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);

  return (
    <div className="countdown">
      <i className="fa-regular fa-clock" />
      <p>{formatTime(countdown)}</p>
    </div>
  );
}
