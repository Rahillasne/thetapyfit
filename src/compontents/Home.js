import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-page">
      <div className="navbar">
        <div className="logo">
          <img src={require('./images/logo.png')}  alt="Logo" />
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={require('./images/head.jpeg')}  alt="Slide 1" />
          </div>
          <div>
            <img src={require('./images/head2.jpg')}  alt="Slide 2" />
          </div>
          <div>
            <img src={require('./images/head3.jpeg')} alt="Slide 3" />
          </div>
        </Slider>
      </div>
      <div className="section">
        <h2>ACL Rehab</h2>
        <div className="card-container">
          <Link to="/acl1">
            <div className="card">
              <img src={require('./images/acl1.jpeg')} alt="Card 1" />
              <h3>Week 1</h3>
              <p>Initial stage of ACL rehabilitation focusing on pain management and gentle range of motion exercises. </p>
            </div>
          </Link>
          <Link to="/card2">
            <div className="card">
              <img src={require('./images/acl2.jpeg')} alt="Card 2" />
              <h3>Week 2</h3>
              <p>Progression of ACL rehab with increased range of motion exercises and early strengthening exercises.</p>
            </div>
          </Link>
          <Link to="/card3">
            <div className="card">
              <img src={require('./images/acl3.jpeg')} alt="Card 3" />
              <h3>Week 3</h3>
              <p>Advanced ACL rehab involving stability exercises, balance training, and gradual return to functional activities.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="section">
        <h2>MCL Rehab</h2>
        <div className="card-container">
          <Link to="/card4">
            <div className="card">
              <img src={require('./images/mcl.webp')} alt="Card 4" />
              <h3>Week 1</h3>
              <p>Early stage of MCL rehabilitation with emphasis on reducing pain and swelling through rest and ice.</p>
            </div>
          </Link>
          <Link to="/card5">
            <div className="card">
              <img src={require('./images/acl1.jpeg')} alt="Card 5" />
              <h3>Mcl 2</h3>
              <p>Continuation of MCL rehab with gentle range of motion exercises and introduction of light strengthening exercises.</p>
            </div>
          </Link>
          <Link to="/card6">
            <div className="card">
              <img src={require('./images/mcl3.webp')} alt="Card 6" />
              <h3>Mcl 3</h3>
              <p>Advanced MCL rehab involving progressive strengthening exercises, stability training, and functional exercises.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="section-end">
        <h2>End of the website</h2>
      </div>
    </div>
  );
};

export default HomePage;
