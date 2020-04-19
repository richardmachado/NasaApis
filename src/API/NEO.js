import React, { useState, useEffect } from "react";
import axios from "axios";

import classNames from 'classnames';

import NEOKey from "./NEOKey"
import "./NEO.css"




// function for today so that it automatically updates the site

var today = new Date()
var dd = String(today.getUTCDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd ;




// end of today function


function NEO(props) {
  const [neo, setNeo] = useState([]);


  useEffect(() => {
    axios

      .get(`https://api.nasa.gov/neo/rest/v1/feed/?date=${today}?detailed=true&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4`)   
      .then(response => {
          
          setNeo(response.data.near_earth_objects[today]);
   
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3"><span classname="text-dark"> Near Earth Objects </span>  for  {today}</h1>        
          <NEOKey />  
        {neo.map(rock => {
            return (
            <ul className="list-group">
      <h4 className="mb3" key={rock.name} style={{width:'500px'}}>Object Name: <span className={classNames({
              'text-danger': !rock.name,
              'text-success': rock.name})}>{rock.name}</span></h4>    
          <ul className="group-list">      
        <li className="group-list-item" >Size : {rock.estimated_diameter.miles.estimated_diameter_max} miles</li>
        {/* <li className="group-list-item">
        Potentially hazardous: <span className={classNames({
              'text-danger': rock.is_potentially_hazardous_asteroid,
              'text-success': !rock.is_potentially_hazardous_asteroid})}>
                      {`${rock.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}`}
                      </span>          
                    </li> */}
                    </ul>                  
                    </ul>
  )
  })}
      </div>
    </div>


    
    
  );
}

export default NEO;