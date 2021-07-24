import React from "react";
import "./HeroSection.css";
import Button from "./Button";
import vector from "./../images/hero.svg";
// improt vector from "./../images/hero-vector.svg";
const HeroSection = () => {
  return (
    <div className="hero-div">
      <div className="hero-container">
        <div className="hero-container-items">
          <h1>Team Work Makes The Dream Work</h1>
          <p>We helps brands and companies stand out from competition.</p>
          <p>
            We help your company to get a better working environment for the
            better engagement.
          </p>
          <Button />
        </div>
        <div className="hero-container-items">
          <img className="hero-image" src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
