import React from 'react';
import './AboutCard.scss';

function AboutCard({name,position,profile_pic,insta_url,in_url,twitter_url}) {
    return (
        <div className='about-card'>
            <div className="about-card-content">
                <div className="imgBox"><img src={profile_pic} alt="" /></div>
                <div className="about-card-post">
                    <h3>{name}</h3>
                    <h3>{position}</h3>
                </div>
            </div>

            <ul className='about-card-sci'>
                <li>
                    <a href={insta_url} target='_blank'>
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>

                <li>
                    <a href={twitter_url} target='_blank'>
                    <i className="fab fa-twitter"></i>
                    </a>
                </li>

                <li>
                    <a href={in_url} target='_blank'>
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AboutCard;
