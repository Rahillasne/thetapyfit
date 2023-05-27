import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/kneef');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleArrowClick = () => {
    navigate('/kneef');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2 style={{ fontSize: '50px' }} className="ui center aligned icon header">
        <i className="thumbs up outline icon"></i>
        ARE You Ready
      </h2>
    </div>
  );
};

export default Page1;
