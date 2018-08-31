import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
          <div>
            <Home/>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
