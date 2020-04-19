import React, { Component} from 'react';
import Home from "./Home"

import {  Route } from 'react-router-dom';

import './App.css';

// import Navbar from "./Navigation/Navigation";
import Navi from "./Navigation/Nav"
// import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navi />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
