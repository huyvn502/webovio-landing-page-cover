import React from 'react';
import GenevieveRodriquez from '../img/avatar/GenevieveRodriquez-Avatar.png';

const Services = () => {
    return (
        <div id="services">
            <div id="service-content">
                <p className="small-paragraph">What we do for you</p>
                <h1>
                    Strategy
                    <br /> 
                    Design Content
                    <br />
                    Technology Development
                </h1>
                <p className="grey-text">There’s no secret sauce, no wizard behind the curtain. 
                    What makes Aerolab tick is an interdisciplinary team with a framework 
                    that fosters candid collaboration.</p>
                <p className="paragraph-link"><i class="fas fa-angle-double-right"></i>More know About us</p>
            </div>
            <div id="CEO-comment">
                <h3>With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, 
                    We Build Brands and Help Them Succeed</h3>
                <div className="author-box">
                    <img src={GenevieveRodriquez} alt="CEO Genevieve Rodriquez Avatar" />
                    <div>
                        <p>Genevieve Rodriquez</p>
                        <p className="small-paragraph">Founder &amp; CEO, Webovio</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;