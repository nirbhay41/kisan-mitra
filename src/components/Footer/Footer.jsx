import React from 'react'
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="sec footer-about">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati esse
                    eos optio eligendi vitae consequatur minima autem ad quo ex ipsam suscipit amet sit,
                    ratione repudiandae, fuga culpa dolore.</p>
                    <ul className="social-media-icons">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

                <div className="sec footer-help">
                    <h2>Govt Help Line No.</h2>
                    <ul className="number">
                        <li>
                            <span><i class="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:1800-180-1551">1800-180-1551</a></p>
                        </li>

                        <li>
                            <span><i class="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:011-24300606">011-24300606</a></p>
                        </li>
                    </ul>
                </div>
                <div className="sec footer-contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>69 Virgin Street, GB Road, Delhi,<br />India</span>
                        </li>

                        <li>
                            <span><i class="fas fa-phone-square-alt"></i></span>
                            <p><a href="tel:+911234567890">+91 1234567890</a></p>
                        </li>

                        <li>
                            <span><i class="fas fa-envelope"></i></span>
                            <p><a href="mailto:kishan-mittre@gmail.com">kishan-mittre@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
