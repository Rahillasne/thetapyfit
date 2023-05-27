import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Kbend1.css';
 // Import the CSS file


const Kbend1 = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(45);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsRemaining > 0 && !isPaused) {
      const timer = setTimeout(() => {
        setSecondsRemaining((seconds) => seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (secondsRemaining === 0) {
      navigate('/tsqueze');
    }
  }, [secondsRemaining, isPaused, navigate]);

  const handlePausePlayClick = () => {
    setIsPaused((prevState) => !prevState);
  };
  const forward = () => {
    navigate('/tsqueze');
  };
  const backword = () => {
    navigate('/kbend');
  };

  return (
        
      <div className="timer-container">
        <img className="ui medium rounded image" src={require('./kbend.jpeg')} alt="Knee Image" />
        <h3 class="name" >Knee Bend</h3>
        <h1 class='timer'>00:{secondsRemaining}</h1>
        <i class="angle left icon" onClick={backword}></i>
        <i class="angle right icon" onClick={forward}></i>
        <button className="pause-play-button" onClick={handlePausePlayClick}>
          {isPaused ? <i className="play circle icon"></i> : <i className="pause circle icon"></i>}
        </button>
      </div>
  );
};

export default Kbend1;