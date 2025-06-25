import React from "react";
import hero from "./assets/hero.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${hero})`,
      }}
    >
      <h1 className="hero-heading">
        We Roll Out The Red Carpet For Your Legal Issues
      </h1>

      <p className="hero-subheading">
        We help individuals and businesses resolve income tax debts affordably
        through legal tax settlement strategies
      </p>

      <div className="hero-buttons">
        <button className="hero-button-outline">Watch Now</button>
        <button className="hero-button-filled">Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
