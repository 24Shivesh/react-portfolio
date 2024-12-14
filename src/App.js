import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import CursorEffect from "./CursorEffect";
import "./App.css"; // Make sure you have your CSS properly linked
import './styles/responsive.css';
import Sphere from "./icons";




const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Sphere />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CursorEffect /> 
    </div>
  );
};

export default App;
