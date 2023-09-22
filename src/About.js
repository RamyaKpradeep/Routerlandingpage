
import React from "react";
// import AboutBackground from '../src/images/pexels-jan-n-g-u-y-e-n-🍁-2664216.jpg'
import AboutBackgroundImage  from '../src/images/pexels-fox-1595391.jpg'
import "./About.css";

const About = () => {
  return (
    <div className="about-section-container">
      {/* <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
      </div> */}
      <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
        
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <p className="ttext">

        We’re Udemy, a leading destination for learning and teaching online.

If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).

        </p>
        <p className="ttext">
        Learn valuable, practical skills from free online video courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.
        </p>
        <div className="about-buttons-container">
          <button className="HH">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;


