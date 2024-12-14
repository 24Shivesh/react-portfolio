import React from "react";
import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import jsIcon from "./assets/Javascript.png";
import reactIcon from "./assets/react.png";
import mongodbIcon from "./assets/mongodb.png";
import nodejsIcon from "./assets/nodejs.png";
import expressIcon from "./assets/express.png";
import gitIcon from "./assets/git.png";
import powerBiIcon from "./assets/Power Bi.png";
import sqlIcon from "./assets/sql.png";
import pythonIcon from "./assets/python.png";
import arrowIcon from "./assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={htmlIcon} alt="HTML Icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={cssIcon} alt="CSS Icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={jsIcon} alt="JavaScript Icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={reactIcon} alt="React Icon" className="icon" />
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>

          {/* Backend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={mongodbIcon} alt="MongoDB Icon" className="icon" />
                <div>
                  <h3>MongoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={nodejsIcon} alt="Node JS Icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={expressIcon} alt="Express JS Icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={gitIcon} alt="Git Icon" className="icon" />
                <div>
                  <h3>GitHub</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>

          {/* Data Analyst */}
          <div className="details-container">
            <h2 className="experience-sub-title">Data Analyst</h2>
            <div className="article-container">
              <article>
                <img src={powerBiIcon} alt="Power BI Icon" className="icon" />
                <div>
                  <h3>Power BI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={sqlIcon} alt="SQL Icon" className="icon" />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={pythonIcon} alt="Python Icon" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow Icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
