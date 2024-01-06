import React, { useState, useEffect, useContext } from 'react';
import { LangueContext } from '../../Context/LangueContext';

const Timer = () => {
  const { gameFinished,langueTrans} = useContext(LangueContext);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [stoppedTime, setStoppedTime] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setStoppedTime(timeLeft);
    }
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (gameFinished) {
      setIsRunning(false);
    }else{
        setIsRunning(true);
        setTimeLeft(0)

    }
  }, [gameFinished]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

  return (
    <div id='timer'>
      {gameFinished ? (
        <p className='spentTimer'>{langueTrans === "EN" ? "You spent :" : "Tu as depensé :" }  {formatTime(stoppedTime)}</p>
      ) : (
        <p>{formatTime(timeLeft)}</p>
      ) }
    </div>
  );
};

export default Timer;
