import React from 'react';
import WebovioLogo from '../../img/logo/webovio-logo.png';
import project1 from '../../img/project/project1.png';
import project2 from '../../img/project/project2.png';
import project3 from '../../img/project/project3.png';
import { useEffect } from 'react';
import $ from 'jquery';

const NavigationBar = () => {

    // Handler Event when click and hover anchor in navigation bar 
    const navigateHandle = (elementLink, preview) => {
        $(elementLink).on({
            mouseenter: function() {
                $(preview).addClass("is-hover");
                $(".preview").addClass("is-hover");
            },
            mouseleave: function() {
                $(".preview").removeClass("is-hover");
                $(preview).removeClass("is-hover");
            },
            click: function() {
                $(".hamburger-btn").removeClass("is-active");
                $(".anchor-to-part").removeClass("is-active");
                $(".menu-nav").animate({left: "100%"}, 300).addClass("close-menu");
                $(".navigation-bar").addClass("background-navigation-bar");
            }
        });
    }

    useEffect(() => {
        $(document).ready(function() {

            // Appear fullscreen menu when hamburger button is clicked  
            $(".hamburger-btn").click(function() {
                $(this).toggleClass("is-active");
                
                if ($(".menu-nav").hasClass("close-menu")) {
                    $(".menu-nav").animate({left: "0"}, 500, function() {
                        $(".anchor-to-part").addClass("is-active");
                    }).removeClass("close-menu");
                    $(".navigation-bar").removeClass("background-navigation-bar");
                } else {
                    $(".anchor-to-part").removeClass("is-active");
                    $(".menu-nav").delay(300).animate({left: "100%"}, 500).addClass("close-menu");
                    if (document.documentElement.scrollTop > 100) $(".navigation-bar").addClass("background-navigation-bar");
                }
            });

            // All items in navigation call corresponding navigateHandle 
            let navItemLength = document.getElementsByClassName("anchor-to-part").length;
            for (let index = 0; index < navItemLength; index++)  {
                navigateHandle(
                    `#${document.getElementsByClassName("anchor-to-part")[index].id}`, 
                    `.${document.getElementsByClassName("preview-item")[index].classList[0]}`);
            }
            // Detail Explain:  
            // navigateHandle("#link-to-contact", ".contact-preview");
            // navigateHandle("#link-to-services", ".service-preview");
            // navigateHandle("#link-to-project", ".project-preview");
            // navigateHandle("#link-to-evaluation", ".evaluation-preview");
            // navigateHandle("#link-to-references", ".more-preview");
            
        });
    }, []);
    return (
        <div id="navigation">
            <div className="navigation-bar">
                <img className="logo" src={WebovioLogo} alt="Logo of Webovio"/>
                <div className="hamburger-btn">
                    <div className="hamburger-container">
                        <div className="hamburger-bar"></div>
                    </div>
                </div>
            </div>
            <div className="menu-nav close-menu">
                <div className="preview is-leave">
                    <div className="contact-preview preview-item">
                        <div>
                            <p className="color-text">Phone</p>
                            <p className="white-text">+32 50 31 28 32</p>
                        </div>
                        <div>
                            <p className="color-text">Address</p>
                            <p className="white-text">491 Merlin Crest Suite 963</p>
                        </div>
                    </div>
                    <div className="service-preview preview-item">
                        <h1>Strategy</h1>
                        <h1>Design Content</h1>
                        <h1>Technology Development</h1>
                    </div>
                    <img className="project-preview preview-item" src={project1} alt="Project Image" />
                    <img className="evaluation-preview preview-item" src={project2} alt="Project Image" />
                    <img className="more-preview preview-item" src={project3} alt="Project Image" />
                </div>
                <div className="nav-container">
                    <a className="anchor-to-part" id="link-to-contact" href="#main-contact">CONTACT</a>
                    <a className="anchor-to-part" id="link-to-services" href="#services">SERVICES</a>
                    <a className="anchor-to-part" id="link-to-project" href="#project-container">PROJECTS</a>
                    <a className="anchor-to-part" id="link-to-evaluation" href="#dilation-evaluation">EVALUATION</a>
                    <a className="anchor-to-part" id="link-to-references" href="#references">REFERENCES</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;