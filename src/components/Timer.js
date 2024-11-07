import React, { useState, useEffect } from 'react';
import { sendNotification } from '../utils/Notification';

const Timer = ({ focusTime, breakTime }) => {
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(true);
  
  useEffect(() => {
    setTimeLeft(focusTime * 60);
  }, [focusTime]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      sendNotification(isFocusMode ? "Time to take a break!" : "Time to focus!");
      setIsFocusMode(!isFocusMode);
      setTimeLeft(isFocusMode ? breakTime * 60 : focusTime * 60);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isFocusMode, focusTime, breakTime]);

  const resetTimer = () => {
    setIsRunning(false); 
    setIsFocusMode(true);
    setTimeLeft(focusTime * 60);
  };

  return (
    <div>
      <h3>{isFocusMode ? "Focus Time" : "Break Time"}</h3>
      <h3>{Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}</h3>
      <button 
        onClick={() => setIsRunning(!isRunning)}
        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button 
        onClick={resetTimer}
        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
