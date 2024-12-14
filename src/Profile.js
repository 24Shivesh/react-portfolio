import React from "react";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import instaIcon from "./assets/insta.png";

const Profile = () => {
  const handleCVDownload = () => {
    window.open("/react-portfolio/assets/202150101094_shivesh_borse.pdf", "_blank");

  };

  const handleContactScroll = () => {
    window.location.href = "#contact";
  };

  return (
    <section id="profile">
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Shivesh Borse</h1>
        <p className="section__text__p2">Software Engineer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleCVDownload}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactScroll}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/24Shivesh?tab=repositories")
            }
          />
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/shivesh-borse/?originalSubdomain=in")
            }
          />
          <img
            src={instaIcon}
            alt="My Instagram profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/_shivxshh/")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
