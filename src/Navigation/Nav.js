import React from 'react';
import {  Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
 
    Switch,
    Route,
    Link } from "react-router-dom";

    
import Home from '../Home';
import Photo from '../POTD';
import EPIC from '../EPIC';
import NEO from '../NEO';

function Navi () {

  
    return (
      <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <NavLink tag={Link} to="/">NASA API's</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink tag={Link} to="/POTD">Photo of the Day</NavLink>
      <NavLink tag={Link} to="/EPIC">EPIC API</NavLink>
      <NavLink tag={Link} to="/NEO">Near Earth Objects</NavLink>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Richard Machado</Nav.Link>
   
    </Nav>
  </Navbar.Collapse>


</Navbar>
  <Switch>
  <Route exact path="/">
     <Home />
   </Route>
   <Route path="/POTD">
     <Photo />

     </Route>
     <Route path="/EPIC">
     <EPIC />

     </Route>
     <Route path="/NEO">
     <NEO />
     
     </Route>
 </Switch>
 </div>




    );
  }

  export default Navi;