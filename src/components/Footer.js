import React from 'react';
import logo from '../img/logo/webovio-logo.png';

const Footer = () => {
    return (
        <div id="footer">
            <div id="head-footer"></div>
            <div id="content-footer">
                <div id="main-contact">
                    <div>
                        <p className="color-text">Phone</p>
                        <p className="white-text">+32 50 31 28 32</p>
                    </div>
                    <div>
                        <p className="color-text">Address</p>
                        <p className="white-text">491 Merlin Crest Suite 963</p>
                    </div>
                </div>
                <hr />
                <div id="references">
                    <div id="reference-content">
                        <div>
                            <p className="white-text">SERVICES</p>
                            <a href="#" className="color-text">Strategy Design</a>
                            <a href="#" className="color-text">Product Design</a>
                            <a href="#" className="color-text">Content Strategy</a>
                            <a href="#" className="color-text">Brand Strategy</a>
                            <a href="#" className="color-text">Development </a>
                        </div>
                        <div>
                            <p className="white-text">HELP AND DEVICE</p>
                            <a href="#" className="color-text">How it works</a>
                            <a href="#" className="color-text">Contact Support</a>
                            <a href="#" className="color-text">Privacy Policy</a>
                            <a href="#" className="color-text">FAQ</a>
                        </div>
                        <div>
                            <p className="white-text">COMPANY</p>
                            <a href="#" className="color-text">About</a>
                            <a href="#" className="color-text">Blog</a>
                            <a href="#" className="color-text">Contact</a>
                            <a href="#" className="color-text">Jobs</a>
                        </div>
                    </div>
                    <div id="email">
                        <p className="white-text">GET IN TOUCH</p>
                        <p className="color-text">Feel free to get in touch with us via email</p>
                        <h3>info.webovio@gmail.com</h3>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-tumblr"></i>
                    </div>
                </div>
                <hr />
                <div id="bottom-footer">
                    <img src={logo} alt="Logo Webovio" />
                    <p className="color-text">© 2020@webovio. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;