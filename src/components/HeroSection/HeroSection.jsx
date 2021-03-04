import React from 'react'
import Button from  '../Button/Button';
import './HeroSection.scss';
import '../Hero.scss';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/resources/video-5.mp4' autoPlay loop muted />
            <div className="text">
                <h1>Adventure Awaits</h1>
                <p>What are you waiting for ?</p>
                <div className="hero-btns">
                    <Button buttonStyle="btn--outline" buttonSize="btn--large">
                        Get Started
                    </Button>
                    <Button buttonStyle="btn--outline" buttonSize="btn--large">
                        WATCH TRAILER <i className='far fa-play-circle'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
