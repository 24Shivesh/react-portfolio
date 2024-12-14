import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import "./Sphere.css"; // Import the CSS file

const Sphere = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    reverse: true,
    tooltip: "native",
    wheelZoom: true,
  };

  const iconSlugs = [
    "airfrance", "arlo", "dart", "java", "react", "flutter", "android", "andela", "html5",
    "audible", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", "postgresql",
    "firebase", "battledotnet", "nginx", "vercel", "canva", "testinglibrary", "jest", "cypress",
    "docker", "git", "figshare", "jira", "github", "gitlab", "electron", "visualstudiocode",
    "androidstudio", "sonarqube", "figma"
  ];

  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));

  return (
    <div className="sphere-wrapper">
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor={"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default Sphere;
