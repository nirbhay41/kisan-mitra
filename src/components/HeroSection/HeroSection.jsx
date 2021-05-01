import React from "react";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import "./HeroSection.scss";
import landingPage from "../../resources/images/img3.webp";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src={landingPage} autoPlay loop muted /> */}
      <img src={landingPage} alt="farm" />
      <div className="text">
        <h1>Imagine living</h1>
        <p>Impossible without farming</p>
        <p id="hashtag">#Feeding Millions</p>
        <div className="hero-btns">
          <Link to="card" smooth offset={-60}>
            <Button buttonStyle="btn--outline" buttonSize="btn--large">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
