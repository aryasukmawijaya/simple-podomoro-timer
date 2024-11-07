import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Settings from './components/Settings';

const App = () => {
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <Settings 
        focusTime={focusTime} 
        setFocusTime={setFocusTime} 
        breakTime={breakTime} 
        setBreakTime={setBreakTime}
      />
      <Timer 
        focusTime={focusTime} 
        breakTime={breakTime} 
      />
    </div>
  );
}

export default App;
