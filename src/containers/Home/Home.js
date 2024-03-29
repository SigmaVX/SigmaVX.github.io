import React, { Component } from 'react';
import InfoBoxes from '../../components/InfoBoxes/InfoBoxes';
import About from "../../components/About/About";
import Portfolio from "../Portfolio/Portfolio";
import Splash from "../../components/Splash/Splash";
// import scrollToComponent from 'react-scroll-to-component';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Splash/>
        <InfoBoxes/> 
        <About/>
        <Portfolio/>
      </React.Fragment>
    );
  }
}

export default Home;