import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    
    // Checks props to determine if drawer should be open or closed
    let drawerClasses = [styles.SideDrawer, styles.Close];
    if(props.openDrawer){
        drawerClasses = [styles.SideDrawer, styles.Open];
    }


    return(
        <React.Fragment>
            <Backdrop show={props.openDrawer} clicked={props.closeDrawer}/>
            <div className={drawerClasses.join(" ")}>
                <div className={styles.LogoWrap}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;