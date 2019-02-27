import React from "react";
import styles from "./InfoBoxes.module.css";


const InfoBoxes = (props) => {

    return  (
    
            <div className={styles.boxWrapper}>

                {/* Box 1 */}
                <div  className={[styles.box, styles.boxSquare, styles.box1].join(" ")} id="box1">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fab fa-react"></i>
                            <p>Languages</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>JavaScript, React, Redux, Node, Express, Mongo, SQL, jQuery, HTML5/CSS3, Bootstrap, Firebase</p>
                        </div>
                    </div>
                </div>
                
                {/* Box 2 */}
                <div  className={[styles.box, styles.boxSquare, styles.box2].join(" ")} id="box2">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-graduation-cap"></i>
                            <p>Education</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Rutgers<br/>Duke University<br/>University of Michigan<br/>York College of PA</p>
                        </div>        
                    </div>
                </div>

                <div className={[styles.boxWide, styles.imgBox1].join(" ")} id="imgBox1">
                    {/* Image 1 */}
                </div>
                
                
                {/* Box 3 */}
                <div  className={[styles.box, styles.boxSquare, styles.box3].join(" ")} id="box3">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-question-circle"></i>
                            <p>Skills</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Agile Project Management, Full Stack Web App Development, Geocoding, Data Visualization, User Research, Analytics, RESTful APIs</p>
                        </div>
                    </div>
                </div>

                <div className={[styles.boxLong, styles.imgBox2].join(" ")} id="imgBox2">
                    {/* Image 2 */}
                </div>

                <div className={styles.boxName} id="tony-title">
                    <h1>Tony Wible</h1>
                    <p className="animated bounce">Full Stack Developer<br/>Senior PM & Agile Leader</p>
                </div>
                    
                <div className={[styles.boxSquare, styles.imgBox3].join(" ")} id="imgBox3">
                    {/* Image 3 */}
                </div>


                {/* Box 4 */}
                <div  className={[styles.box, styles.boxSquare, styles.box4].join(" ")} id="box4">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-cogs"></i>
                            <p>Leadership</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Managed International Teams Of Developers, Designers, Analysts, Artists, and Contractors</p>
                        </div>
                    </div>
                </div>

                <div className={[styles.boxLong, styles.imgBox4].join(" ")} id="imgBox4">
                    {/* Image 4 */}
                </div>
                
                {/* Box 5 */}
                <div  className={[styles.box, styles.boxSquare, styles.box5].join(" ")} id="box5">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-building"></i>
                            <p>Industry<br/>Experience</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Digital Media, Gaming, Entertainment, Broadcast, Streaming, Fintech and Finance</p>
                        </div>
                    </div>
                </div>

                <div className={[styles.boxSquare, styles.imgBox5].join(" ")} id="imgBox5">
                    {/* Image 5 */}
                </div>

                {/* Box 6 */}
                <div  className={[styles.box, styles.boxSquare, styles.box6].join(" ")} id="box6">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-lightbulb"></i>
                            <p>Product<br/>Experience</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Designed and Launched Multi-Platform Mobile Apps and Web Applications From Inception</p>
                        </div>
                    </div>
                </div>

                {/* Box 7 */}
                <div  className={[styles.box, styles.boxSquare, styles.box7].join(" ")} id="box7">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-comment-alt"></i>
                            <p>Development<br/>Philosophy</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>I strive for code that is mobile responsive, DRY, reliable, scalable, and symantic.</p>
                        </div>
                    </div>
                </div>

            

                {/* Box 8 */}
                <div  className={[styles.box, styles.boxSquare, styles.box8].join(" ")} id="box8">
                    <div className={styles.front}>
                        <div className={styles.inner}>
                            <i className="fas fa-handshake"></i>
                            <p>Business<br/>Development</p>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.inner}>
                            <p>Senior Relationships Across Multiple Sectors</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


export default InfoBoxes; 