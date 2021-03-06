import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "reactstrap";

import { Switch, Route, Link } from "react-router-dom";

// import Home from "../Home";
import Photo from "../API/POTD";
// import EPIC from '../API/EPIC';
import NEO from "../API/NEO";

import Curiosity from "../Rovers/Curiosity";
import Opportunity from "../Rovers/Opportunity";
import Spirit from "../Rovers/Spirit";
import Perseverance from "../Rovers/Perseverance";

// import MarsWeather from "../API/MarsWeather/MarsWeather";

function Navi() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink tag={Link} to="/">
          NASA APIs
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink tag={Link} to="/POTD">
              Photo of the Day
            </NavLink>
            {/* <NavLink tag={Link} to="/EPIC">EPIC API</NavLink> */}
            <NavLink tag={Link} to="/NEO">
              Near Earth Objects
            </NavLink>

            <NavLink tag={Link} to="/Curiosity">
              Curiosity
            </NavLink>
            <NavLink tag={Link} to="/Opportunity">
              Opportunity
            </NavLink>
            <NavLink tag={Link} to="/Spirit">
              Spirit
            </NavLink>
            <NavLink tag={Link} to="/Perseverance">
              Perseverance
            </NavLink>
            {/* <NavLink tag={Link} to="/MarsWeather">
              Mars Weather
            </NavLink> */}
          </Nav>
          <Nav>
            <Nav.Link href="http://richardmachado.dev">
              Richard Machado
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Photo />
        </Route>
        <Route path="/POTD">
          <Photo />
        </Route>
        {/* <Route path="/EPIC">
     <EPIC />
    </Route> */}
        <Route path="/NEO">
          <NEO />
        </Route>
        <Route path="/Curiosity">
          <Curiosity />
        </Route>
        <Route path="/Opportunity">
          <Opportunity />
        </Route>
        <Route path="/Spirit">
          <Spirit />
        </Route>
        <Route path="/Perseverance">
          <Perseverance />
        </Route>
        {/* <Route path="/MarsWeather">
          <MarsWeather />
        </Route> */}
      </Switch>
    </div>
  );
}

export default Navi;
