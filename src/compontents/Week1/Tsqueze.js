import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Kbend.css';

const Tsqueze = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsRemaining > 0) {
      const timer = setTimeout(() => {
        setSecondsRemaining((seconds) => seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/tsqueze1');
    }
  }, [secondsRemaining, navigate]);

  const handleArrowClick = () => {
    navigate('/tsqueze1');
  };
  const backword = () => {
    navigate('/kbend1');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h1>Break</h1>
      <h2 className="timer">{formatTime(secondsRemaining)}</h2>
      <iframe
        width="868"
        height="488"
        src="https://www.youtube.com/embed/4kQW3GBbgwM?autoplay=1"
        title="Two Chair Stretch"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="video-frame"
      ></iframe>
      <i
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          fontSize: '75px',
          cursor: 'pointer',
        }}
        className="angle right icon"
        onClick={handleArrowClick}
      ></i>
       <i
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          fontSize: '75px',
          cursor: 'pointer',
        }}
        className="angle left icon"
        onClick={backword}
      ></i>
    </div>
  );
};

export default Tsqueze;