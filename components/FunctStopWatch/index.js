import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { format, addMilliseconds } from 'date-fns';

const FunctStopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const btnHandler = () => {
    setIsRunning(!isRunning);
    setIsRunning(false);
  };

  const handlerBtnReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  useEffect(() => {
    if (isRunning) {
      const idInterval = setInterval(() => {
        setTime((time) => addMilliseconds(time, 1000));
      }, 1000);
      return () => {
        clearInterval(idInterval);
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h2>Stop Watch</h2>
      <p>Time: {format(time, 'HH:mm:ss')}</p>
      <button onClick={btnHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handlerBtnReset}>Reset</button>
    </div>
  );
};
