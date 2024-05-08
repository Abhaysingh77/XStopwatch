import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [timeInSec, setTimeInSec] = useState("00");
  const [timeInMin, setTimeInMin] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const time_intrvl = useRef(null);

  const handleReset = () => {
    clearInterval(time_intrvl.current);
    setTimeInSec("00");
    setTimeInMin(0)
    setIsOn(false);
  };

  const handleStart = () => {
    setIsOn(true);
    time_intrvl.current = setInterval(() => {
      setTimeInSec((prev) => {
        if (Number(prev) === 59) {
          setTimeInMin(timeInMin+1);
          return "00";
        } else {
          return prev < 9 ? "0" + (Number(prev) + 1) : String(Number(prev) + 1);
        }
      });
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(time_intrvl.current);
    setIsOn(false);
  };
  return (
    <>
      <h1>Stopwatch</h1>
      <p>
        Time: {timeInMin}:{timeInSec}
      </p>
      {!isOn ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
