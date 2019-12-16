import React, { Component} from 'react';


import './App.css';

// import Youtube from './Youtube';
// import Navbar from "./Navigation/Navigation";
import Navi from "./Navigation/Nav"
// import Footer from "./Footer";


class App extends Component {
  render() {
    return (
     
      <div className="App">
   
         {/* <Navbar />   */}
         <Navi />
      </div>
    );
  }
}

export default App;
