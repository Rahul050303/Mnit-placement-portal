import React from 'react';
import Navbar from './Navbar';
import BannerImage from '../assets/vltc.jpg';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">

        <div className="home-banner-content">
          <h1 className='primary-heading'>
            Welcome to MNIT Jaipur
          </h1>
          <p className='primary-text'>
            Your gateway to excellence in education and research.
          </p>
          
          <button className="secondary-button">
            Explore <FiArrowRight />
          </button>
        </div>

        <div className="home-banner-image-foreground">
          <img src={BannerImage} alt="Foreground" />
        </div>
      </div>
    </div>
  );
};

export default Home;
