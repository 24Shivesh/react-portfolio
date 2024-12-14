import React from "react";
import profilePic from "./assets/photo-3.jpg";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";


const About = () => {
  const handleExperienceScroll = () => {
    window.location.href = "#experience";
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profilePic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech Degree <br /> Pursuing my B.Tech Degree in Information
                and Technology.
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a motivated and dedicated B.Tech student majoring in
              Information Technology at Jawaharlal Nehru Engineering College,
              graduating in 2025. I am a passionate front-end developer with a
              strong foundation in web technologies. Currently, I am diving
              deeper into the MERN stack to expand my skill set. In addition to
              building on my knowledge of MongoDB, Express, React, and Node.js,
              I have developed several web projects that demonstrate my
              capabilities. These projects reflect my practical experience and
              my ability to implement efficient, user-friendly applications.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleExperienceScroll}
      />
    </section>
  );
};

export default About;
