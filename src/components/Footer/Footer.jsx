import React from 'react'
import './Footer.scss';

function Footer({backgroundStyle}) {
    const checkStyle = backgroundStyle === 'bg-black' ? 'bg-black' : 'bg-grey';
    return (
        <footer className={checkStyle}>
            <div className="footer-container">
                <div className="sec footer-about">
                    <h2>About us</h2>
                    <p>Kisan Mitra is a programme designed to approach and understand farmers needs, offer advice, guide and refer best farm practices to them. 
                        Be it soil, growth and nurturing of crops or pest related problems Kisan Mitra Team (KM) – is dedicated to resolve them. 
                    </p>
                    <ul className="social-media-icons">
                        <li><a href=""><i className="fab fa-facebook"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

                <div className="sec footer-help">
                    <h2>Govt Help Line No.</h2>
                    <ul className="number">
                        <li>
                            <span><i className="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:1800-180-1551">1800-180-1551</a></p>
                        </li>

                        <li>
                            <span><i className="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:011-24300606">011-24300606</a></p>
                        </li>
                    </ul>
                </div>
                <div className="sec footer-contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <span>Chandigarh University,<br/>Chandigarh, Punjab, <br />India</span>
                        </li>

                        <li>
                            <span><i className="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:+911234567890">+91 1234567890</a></p>
                        </li>

                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <p><a href="mailto:kisanmitra@gmail.com">kisanmitra@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
