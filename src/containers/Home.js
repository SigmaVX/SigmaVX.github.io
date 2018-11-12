import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import SplashBoxes from '../components/SplashBoxes';
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
// import scrollToComponent from 'react-scroll-to-component';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>  
        <SplashBoxes/> 
        <About/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default Home;