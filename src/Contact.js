import React from "react";
import emailIcon from "./assets/email.png";
import linkedinIcon from "./assets/linkedin.png";
import instaIcon from "./assets/insta.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:shiveshborse55@gmail.com">shiveshborse55@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/shivesh-borse/?originalSubdomain=in">
              LinkedIn
            </a>
          </p>
        </div>

        <div className="contact-info-container">
          <img
            src={instaIcon}
            alt="Instagram icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.instagram.com/_shivxshh/">Instagram</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
