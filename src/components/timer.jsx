import { useEffect, useState } from "react";
import "./Timer.css";

function Timer({ start = 10 }) {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-wrapper">
      <div className="spin-border"></div>
      <div className="time-text">{time}</div>
    </div>
  );
}

export default Timer;
