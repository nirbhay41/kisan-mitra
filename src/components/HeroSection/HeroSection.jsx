import React from 'react'
import { Link } from 'react-scroll';
import Button from '../Button/Button';
import './HeroSection.scss';
import video from '../../resources/bg-video.mp4';
import landingPage from '../../resources/images/img3.jpg';

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src={video} autoPlay loop muted /> */}
            <img src={landingPage} alt="photo"/>
            <div className="text">
                <h1>Imagine living</h1>
                <p>Impossible without farming</p>
                <p id="hashtag">#Feeding Millions</p>
                <div className="hero-btns">
                    <Link to='card' smooth>
                        <Button buttonStyle="btn--outline" buttonSize="btn--large">
                            Get Started
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
