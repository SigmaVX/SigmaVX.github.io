import React, {Component} from "react";
import Collision from "../Collision/Collision";
import styles from "./Splash.module.css";

class Splash extends Component{
    
    componentDidMount(){
        let i = 0;
        let j = 0;
        let headingText = 'Tony Wible';
        let subHeadingText = 'Full Stack Developer & Agile Leader';
        let done = false;
        var speed = 50;

        console.log(document.getElementById("header"));

        function typeWriter() {
            if (i < headingText.length) {
                window.document.getElementById("header").innerHTML += headingText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                done = true;
            }

            if (j < subHeadingText.length && done === true) {
                window.document.getElementById("subheader").innerHTML += subHeadingText.charAt(j);
                j++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

    }
    
    render(){
        
        return(
            <div className={styles.SplashWrapper}>
                <Collision className={styles.Canvas}/>
                <h1 className={styles.Heading} id="header"></h1>
                <h2 className={styles.SubHeading} id="subheader"></h2>
            
            </div>

        );
    }

}

export default Splash;

