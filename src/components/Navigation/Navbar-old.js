import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import { bubble as Menu } from 'react-burger-menu';
// import VerticalNav from "./VerticalNav";

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "",
      fontColor: ""
    };
  }

  render() {
    return  (
        
            <nav className="navbar">

                            
                <img id="sigma-icon" src="/images/Sigma.png" alt="Sigma Icon"></img>
                
                <h1 className="nav-name animated rubberBand">
                    Tony Wible
                </h1>

               
                    <a className="nav-icon nav-icon1" href="https://github.com/SigmaVX" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                
                    <a className="nav-icon" href="https://www.linkedin.com/in/tonywible/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a className="nav-icon" href="mailto: [tonywible@gmail.com]">
                        <i className="fas fa-envelope"></i>
                    </a>
                            
            </nav>
        
    );
  }
}

export default Navbar;
// Add Vertical Nav With this - wrap around nav tags
// <Menu width={ '200px' } customBurgerIcon={ <img id="burger-icon" src="images/Sigma.png" /> }>
// </Menu>

// <Menu width={ '200px' } customBurgerIcon={ <img id="burger-icon" src="images/Sigma.png" /> }>
//                     <div className="navbar-link-wrap">
//                         <ul className="navbar-links">
//                             <li className={window.location.pathname === "/about" ? "nav-item nav-active" : "nav-item"}>
//                                 <Link className="nav-link" to="/about">About Me</Link>
//                             </li>
//                             <li className={window.location.pathname === "/portfolio" ? "nav-item nav-active" : "nav-item"}>
//                                 <Link className="nav-link" to="/portfolio">Portfolio</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </Menu>

// <img id="" src="images/Sigma.png" />