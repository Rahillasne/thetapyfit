import React from 'react';
import { Link } from 'react-router-dom';
import './Acl1.css';

function Acl1() {
  return (
    <div>
      <div className="header-container">
        <img className="header-image" src='https://spearcenter.com/images/1400_w/2017/09/25/service_return-to-play-testing-1-865.jpg' alt="Header" />
        <h2 className="header-text">ACL Week 1</h2>
      </div>

      <div className="card-container">
        <div className="card">
          <img className="card-image" src="https://spearcenter.com/images/1400_w/2017/09/25/service_return-to-play-testing-1-865.jpg" alt="Card Image" />
          <div className="card-content">
            <h3 className="card-title">Card Title</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu purus quis risus aliquam consectetur.</p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <Link to="/page1">
          <button className="start-button">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default Acl1;
