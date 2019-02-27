import React from "react";
import styles from "./Carousel.module.css";


const Carousel = () =>{
    return (
        <React.Fragment>
            <section>
                <div className={styles.gridWrapper} id="grid">
                    {/* Images */}
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-1"></div>
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-2"></div>
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-3"></div>
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-4"></div>
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-5"></div>
                    <div className={[styles.box, styles.scaleIn].join(" ")} id="box-6"></div>
                </div>
            </section>

            <section className="icon-section">
                {/* Buttons & Controls */}
                <div className={styles.iconWrap} id="play">
                    <i className="icon far fa-play-circle"></i>
                </div>
                <div className={styles.iconWrap} id="pause">
                    <i className="icon far fa-pause-circle"></i>
                </div>
                <div className={styles.iconWrap} id="shuffle">
                    <i className="icon fas fa-random"></i>
                </div>   
            </section>

            <section id="pause-modal">
                <div>
                    <div className={styles.ldsRipple}><div></div><div></div><br></br>
                        Finishing Animations...<br></br>Please Wait While The Carousel<br></br> Comes To Complete Stop!<br></br>Press Play To Continue.
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}