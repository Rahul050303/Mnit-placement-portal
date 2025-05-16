import React from "react";
import AboutBackgroundImage from "../assets/pnd2.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Foreground" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          One of the finest Institutes in India
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
          Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
