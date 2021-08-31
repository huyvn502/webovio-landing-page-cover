import React from 'react';
import project1 from '../img/project/project1.png';
import project2 from '../img/project/project2.png';
import project3 from '../img/project/project3.png';
import AngelArmstrong from '../img/avatar/AngelArmstrong-Avatar.png';
import EuniceOliver from '../img/avatar/EuniceOliver-Avatar.png';
import LinaHart from '../img/avatar/LinaHart-Avatar.png';

const Project = () => {
    return (
        <div id="project-container">
            <div id="project-header">
                <h1>We Have Some Awesome Project.</h1>
                <p className="grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>
            <div className="project">
                <div className="project-view">
                    <img src={project1} alt="Project Image" />
                    <div className="client-comment">
                        <p>“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”</p>
                        <div className="author-box"> 
                            <img src={AngelArmstrong} alt="Angel Armstrong Avatar" />
                            <div>
                                <p>Angel Armstrong</p>
                                <p className="small-paragraph">Founder &amp; CEO, Google</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-content">
                    <h1>The wall new Balenciaga.com</h1>
                    <div>
                        <p className="grey-text">This article is floated online with an aim to help you find the best dvd printing solution.</p>
                        <p className="grey-text">Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.</p>
                    </div>
                    <p className="paragraph-link"><i class="fas fa-angle-double-right"></i>See Case Study</p>
                </div>
                
            </div>
            <div className="project project-right">
                <div className="project-content">
                    <h1>Is this the future of 3D model?</h1>
                    <div>
                        <p className="grey-text">While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space.</p>
                        <p className="grey-text">It is those feelings that drive our love of astronomy and our desire to learn more and more about it. </p>
                    </div>
                    <p className="paragraph-link"><i class="fas fa-angle-double-right"></i>See Case Study</p>
                </div>
                <div className="project-view">
                    <img src={project2} alt="Project Image" />
                    <div className="client-comment">
                        <p>“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.</p>
                        <div className="author-box"> 
                            <img src={LinaHart} alt="Lina Hart Avatar" />
                            <div>
                                <p>Lina Hart</p>
                                <p className="small-paragraph">Founder &amp; CEO, Jico</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="project">
                <div className="project-view">
                    <img src={project3} alt="Project Image" />
                    <div className="client-comment">
                        <p>“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”</p>
                        <div className="author-box"> 
                            <img src={EuniceOliver} alt="Eunice Oliver Avatar" />
                            <div>
                                <p>Eunice Oliver</p>
                                <p className="small-paragraph">Founder &amp; CEO, Zeem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-content">
                    <h1>Is this the future of Online Booking</h1>
                    <div>
                        <p className="grey-text">You should be able to find several indispensable facts about motivation in the following paragraphs.</p>
                        <p className="grey-text">If there’s at least one fact you didn’t know before, imagine the difference it might make.</p>
                    </div>
                    <p className="paragraph-link"><i class="fas fa-angle-double-right"></i>See Case Study</p>
                </div>
            </div>
        </div>
    );
};

export default Project;