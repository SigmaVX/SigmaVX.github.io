import React, {Component} from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';
import scrollToComponent from 'react-scroll-to-component';
import About from "./About";


const aboutScroll=()=>{
  scrollToComponent(this.About, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
 
}

const portfolioScroll=()=>{
  scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
}

class VerticalNav extends Component {

  render() {
    return  (
      <Menu
      width={ '170px' }
      customBurgerIcon={ <img id="burger-icon" src="images/Sigma.png" /> } 
      >
        <nav className="side-nav">

            <div className="side-nav-brand-icon-wrapper text-center">
              <img className="side-nav-brand-icon" src="./images/Sigma.png" alt="Sigma Icon"/>
              <p className="side-nav-title">Welcome To<br/>Tony's Side Bar!</p>
            </div>
          
        
            <ul className="side-nav-link-wrap">
              
              <li className="side-nav-link">
                <a className="side-nav-icon nav-icon1" href="https://github.com/SigmaVX" target="_blank">
                    <i className="fab fa-github-square"></i>
                    My Github
                </a>
              </li>

              <li className="side-nav-link">
                <a className="side-nav-icon nav-icon2" href="https://www.linkedin.com/in/tonywible/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    My LinkedIn
                </a>
              </li>

              <li className="side-nav-link">
                <a className="side-nav-icon nav-icon3" href="mailto: [tonywible@gmail.com]">
                    <i className="fas fa-envelope"></i>
                    Email Me
                </a>
              </li>

            </ul>
        </nav>
      </Menu>
    );
  }
}

export default VerticalNav;


// <li className="side-nav-link">
// <button className="" onClick={()=>scrollToComponent(this.About, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>
//   About Me
// </button>
// </li>

// <li className="side-nav-link">
// <div className="" onClick={()=>scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>
//   My Portfolio
// </div>
// </li>