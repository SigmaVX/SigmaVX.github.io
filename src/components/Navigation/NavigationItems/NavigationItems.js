import React from "react";
import styles from "./NavigationItems.module.css";
import {NavLink} from "react-router-dom";

// NavLink is rendered as <a> in HTML and will add "active" class but
// active is attached with activeClassName due to use of CSS moduels
// "To" is treated like a prefix unless you use exact

const NavigationItems = (props) =>{
    return(
        <ul className={styles.NavigationItems}>



            <li className={styles.NavigationItem}>
                <a className={styles.navIcon} href="https://github.com/SigmaVX" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
            </li>
        
            <li className={styles.NavigationItem}>
                <a className={styles.navIcon} href="https://www.linkedin.com/in/tonywible/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>

            <li className={styles.NavigationItem}>
                <a className={styles.navIcon} href="mailto: [tonywible@gmail.com]">
                    <i className="fas fa-envelope"></i>
                </a>   
            </li>
        </ul>
    );
};

export default NavigationItems;

// <NavigationItem className={styles.NavigationItem} link="/">About</NavigationItem>
// <NavigationItem className={styles.NavigationItem} link="/portfolio">Portfolio</NavigationItem> 

// <li className={styles.NavigationItem}>
// <NavLink to="/" activeClassName={styles.active}>
//     About
// </NavLink>
// </li>

// <li className={styles.NavigationItem}>
// <NavLink to="/portfolio" activeClassName={styles.active}>
//     Portfolio
// </NavLink>
// </li>
