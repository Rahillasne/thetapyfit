import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Kneef.css';

const Kneef = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/kneef1');
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleArrowClick = () => {
    navigate('/kneef1');
  };

  return (
      <div className="timer-container">
        <h1>Knee Flextion - 60 Seconds</h1>
      <iframe
        width="868"
        height="488"
        src="https://www.youtube.com/embed/bE1mX_WXbYU?autoplay=1"
        title="Two Chair Stretch"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="video-frame"
      ></iframe>
        <i style={{ position: 'absolute', top: '50%',right: '20px', transform: 'translateY(-50%)', fontSize: '75px',cursor: 'pointer'}} className="angle right icon" onClick={handleArrowClick}></i>
      </div>

  );
};

export default Kneef;

