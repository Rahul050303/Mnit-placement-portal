import React from "react";
import ProfilePic from "../assets/Director.png";

const Director = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Director's Words</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Profile" />
        <p>
          "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non elit.
          Dolor turpis molestie dui magnis facilisis at fringilla quam."
        </p>
        <h2>Director Name</h2>
      </div>
    </div>
  );
};

export default Director;
