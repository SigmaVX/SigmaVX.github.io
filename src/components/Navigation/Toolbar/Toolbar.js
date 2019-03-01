import React from "react";
import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) =>{
    return(
        <header className={style.Toolbar}>
            <div className={style.LogoWrap}><Logo/></div>
            <h1 className={style.Name}>Tony Wible</h1>
            <nav className={[style.NavItems].join(" ")}><NavigationItems/></nav>
        </header>
    );
}

export default Toolbar;

// <DrawerToggle toggle={props.toggleDrawer}/>
