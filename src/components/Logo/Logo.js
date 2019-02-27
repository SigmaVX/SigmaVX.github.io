import React from "react";
import sigmaLogo from "../../assets/images/Sigma.png";
import style from "./Logo.module.css";

const Logo = (props) =>(
    <div className={style.Logo}>
        <img src={sigmaLogo} alt="Burger Logo"/>
    </div>
    
);

export default Logo;