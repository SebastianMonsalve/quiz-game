import { useEffect, useRef, useState } from "react";
import "./CountDown.css";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({
  seconds,
  stopTimer,
  onTimeUp,
  addTimeRef,
}) {
  const [countdown, setCountdown] = useState(seconds);
  const [isDelayed, setIsDelayed] = useState(true);
  const [extraTimeMessage, setExtraTimeMessage] = useState(null);
  const [timeUpSoundPlayed, setTimeUpSoundPlayed] = useState(false);
  const timerId = useRef();

  const startTimer = () => {
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  useEffect(() => {
    setCountdown(seconds);
    setIsDelayed(true);
    clearInterval(timerId.current);

    const delayTimeout = setTimeout(() => {
      setIsDelayed(false);
      setTimeUpSoundPlayed(false);
      startTimer();
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
    if (countdown === 0 && !timeUpSoundPlayed) {
      clearInterval(timerId.current);

      setTimeUpSoundPlayed(true);
      if (onTimeUp) onTimeUp();
    }
  }, [countdown, onTimeUp, timeUpSoundPlayed]);

  useEffect(() => {
    if (addTimeRef) {
      addTimeRef.current = (additionalSeconds) => {
        setExtraTimeMessage(`+${additionalSeconds}s`);

        setTimeout(() => {
          setCountdown((prev) => {
            const newTime = prev + additionalSeconds;

            if (prev === 0 && additionalSeconds > 0) {
              setTimeUpSoundPlayed(false);
              startTimer();
            }

            return newTime;
          });

          setExtraTimeMessage(null);
        }, 2000);
      };
    }
  }, [addTimeRef]);

  const countdownClass =
    countdown <= 3 && !isDelayed ? "countdown danger" : "countdown";

  return (
    <>
      <div className={countdownClass}>
        <i className="fa-regular fa-clock" />
        <p>{isDelayed ? formatTime(seconds) : formatTime(countdown)}</p>
      </div>
      {extraTimeMessage && (
        <span className="extra-time">{extraTimeMessage}</span>
      )}
    </>
  );
}
