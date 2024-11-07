import React from 'react';

const Settings = ({ focusTime, setFocusTime, breakTime, setBreakTime }) => {
  return (
    <div>
      <div>
        <label htmlFor="focusTime">Focus Time (Minutes): </label>
        <input 
          id="focusTime"
          type="number" 
          value={focusTime} 
          onChange={(e) => setFocusTime(Number(e.target.value))} 
          placeholder="Set focus time in minutes"
        />
      </div>
      <div>
        <label htmlFor="breakTime">Break Time (Minutes): </label>
        <input 
          id="breakTime"
          type="number" 
          value={breakTime} 
          onChange={(e) => setBreakTime(Number(e.target.value))} 
          placeholder="Set break time in minutes"
        />
      </div>
    </div>
  );
}

export default Settings;
