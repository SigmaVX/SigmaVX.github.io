import React from "react";
import tonyImage from "../../assets/images/tony.jpg";
import styles from "./About.module.css";


const About = (props) =>{

    return(
        
        <section className={styles.about}>
            <div className={styles.aboutGridWrapper}>

                <h2 className={styles.aboutTitle}>In A Nutshell</h2>

                <img className={styles.aboutImg} src={tonyImage} alt="Tony Wible"/>
                
                <p className={[styles.aboutBubble, styles.aboutText, styles.aboutP1].join(" ")} id="about-p1">
                    Full stack developer and agile leader that loves to apply analysis towards building optimized products that boost growth and unlock new opportunities.
                </p>

                <p className={[styles.aboutBubble, styles.aboutText, styles.aboutP2].join(" ")} id="about-p2">
                    Worked with executives at Fortune 50 companies, launched multi-platform products from inception, and lead diverse teams.   
                </p>

                <p className={[styles.aboutBubble, styles.aboutText, styles.aboutP3].join(" ")} id="about-p3">
                    Twenty years of experience solving complex problems in the internet, gaming, digital media, entertainment, finance, fintech, and consumer industries.  
                </p>

                <p className={[styles.aboutBubble, styles.aboutText, styles.aboutP4].join(" ")} id="about-p4">
                    My agility and diverse skills allow me to seamlessly write code, lead teams, develop products, research users, and plot winning strategies. 
                </p>
                
                <p className={[styles.aboutBubble, styles.aboutText, styles.aboutP5].join(" ")} id="about-p5">
                    I enjoy code, exploring nature, reading up on philosophy, and exploring the world of online gaming.
                </p>
            
            </div>
        </section>


    )
}

export default About; 