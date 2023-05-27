import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Done.css';
import { useNavigate } from 'react-router-dom';

const Done = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleFinish = () => {
    navigate('/home'); // Replace '/another-link' with the desired link
  };

  return (
    <div className="container">
      <h1 className="title">Rehab Complete!</h1>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="calendar-container">
        <Calendar
          value={currentDate}
          className="react-calendar"
          tileClassName={({ date }) => (date.getDate() === currentDate.getDate() ? 'calender-tile' : null)}
          tileContent={({ date }) => {
            if (date.getDate() === currentDate.getDate()) {
              return (
                <div className="calender-tile">
                  <div className="day-label">ACL Week 1</div>
                  <i className="checkmark icon"></i>
                </div>
              );
            }
            return null;
          }}
        />
      </div>
      <button className="finish-button" onClick={handleFinish}>
        Finish
      </button>
    </div>
  );
};

export default Done;
