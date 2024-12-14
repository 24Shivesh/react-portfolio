import React from "react";
import placementCellImg from "./assets/Placement Cell.png";
import arcadeGamesImg from "./assets/ArcadeGames.png";
import portfolioImg from "./assets/Portfolio.png";
import dashboardImg from "./assets/dashboard.png";
import arrowIcon from "./assets/arrow.png";

const Projects = () => {
  const projects = [
    {
      title: "Placement Cell",
      img: placementCellImg,
      github: "https://github.com/24Shivesh/",
    },
    {
      title: "Arcade Games",
      img: arcadeGamesImg,
      github: "https://github.com/24Shivesh/",
    },
    {
      title: "Portfolio Site",
      img: portfolioImg,
      github: "https://github.com/24Shivesh/",
    },
    {
      title: "E-Commerce Dashboard",
      img: dashboardImg,
      github: "https://github.com/24Shivesh/",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div className="details-container color-container" key={index}>
              <div className="article-container">
                <img
                  src={project.img}
                  alt={`Project ${index + 1}`}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = project.github}
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = "./#contact"}
      />
    </section>
  );
};

export default Projects;
