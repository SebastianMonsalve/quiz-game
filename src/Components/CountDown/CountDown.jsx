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
    // Resetear el temporizador al recibir nuevos segundos
    setCountdown(seconds);
    setIsDelayed(true);
    clearInterval(timerId.current);

    const delayTimeout = setTimeout(() => {
      setIsDelayed(false);
      setTimeUpSoundPlayed(false); // Permite que el sonido vuelva a sonar si llega a 0
      startTimer(); // Iniciar el temporizador
    }, 2000);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timerId.current);
    };
  }, [seconds]);

  useEffect(() => {
    // Detener el temporizador si `stopTimer` es verdadero
    if (stopTimer) {
      clearInterval(timerId.current);
    }
  }, [stopTimer]);

  useEffect(() => {
    // Verificar si el temporizador ha llegado a 0 y reproducir sonido si no lo ha hecho
    if (countdown === 0 && !timeUpSoundPlayed) {
      clearInterval(timerId.current);

      setTimeUpSoundPlayed(true); // Marca que el sonido ya ha sido reproducido
      if (onTimeUp) onTimeUp(); // Llama a la función de "tiempo agotado"
    }
  }, [countdown, onTimeUp, timeUpSoundPlayed]);

  useEffect(() => {
    // Añadir tiempo adicional al temporizador y manejar la lógica del reinicio
    if (addTimeRef) {
      addTimeRef.current = (additionalSeconds) => {
        setExtraTimeMessage(`+${additionalSeconds}s`);

        setTimeout(() => {
          setCountdown((prev) => {
            const newTime = prev + additionalSeconds;

            // Si el tiempo adicional se agrega cuando el contador está en 0
            if (prev === 0 && additionalSeconds > 0) {
              setTimeUpSoundPlayed(false); // Resetear para que el sonido pueda reproducirse nuevamente
              startTimer(); // Reiniciar el temporizador
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
