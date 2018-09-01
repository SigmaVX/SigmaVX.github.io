import React from "react";

const About = (props) =>{

    return(
        
        <section className="container-fluid" id="about">
            <div className="about-grid-wrapper">

                <h2 className="about-title">Me In A Nutshell</h2>

                <img className="about-img" src="./images/tony.jpg" alt="Tony Wible"/>
                
                <p className="about-text" id="about-p1">
                    Top analyst, leader, and full stack developer that loves to apply my aptitude for strategic analysis towards building products that boost growth and unlock new opportunities.
                </p>

                <p className="about-text" id="about-p2">
                    Worked with over 40 top executive teams at some of the largest media and tech companies, launched multi-platform digital products from inception, and lead diverse teams of developers, designers, and analysts.   
                </p>

                <p className="about-text" id="about-p3">
                Twenty years of experience solving complex problems in the fintech, gaming, digital media, entertainment, finance, and consumer industries along with expert knowledge of the secular forces shaping the digital landscape.  
                </p>

                <p className="about-text" id="about-p4">
                    Agility is key in today's fast-moving world where disruption is always around to corner. My holistic skills allow me to seamlessly write code, lead teams with Agile project management, develop products, research users, and plot winning strategies. 
                </p>
                
                <p className="about-text" id="about-p5">
                    In love playing around with code, exploring nature, reading up on philosophy, and getting in some games of Overwatch and Destiny.
                </p>
            
            </div>
        </section>


    )
}

export default About; 