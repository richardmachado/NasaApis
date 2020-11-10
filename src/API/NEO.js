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

const KEY = process.env.REACT_APP_KEY;

function NEO() {
  const [neo, setNeo] = useState([]);
  // const [approach, setApproach] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/feed/?date=${today}?detailed=true&api_key=${KEY}`)   
      .then(response => {
        console.log(response)
        setNeo(response.data.near_earth_objects[today]);
        // setApproach(response.data.near_earth_objects[today].close_approach_data)
        // console.log(response.data.near_earth_objects[today])
      })
      .catch(err => {
        console.log(err);
      });
  },[]);

  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3"><span classname="text-dark"> Near Earth Objects </span>  for  {today}</h1>        
          <NEOKey />  
        {neo.map(rock => {
          return (
           <div>
            <h4 className="mb3" key={rock.name} >Object Name: <span className={classNames({
              'text-danger': !rock.name,
              'text-success': rock.name
            })}>{rock.name}</span></h4>
             
              <p className="size">Size(Maximum Diameter): {Math.round(((rock.estimated_diameter.feet.estimated_diameter_max))*100)/100} feet
              </p>
{/*               
              {approach.map(approaching => {
                return (
                  <div>{approaching.close_approach_date}</div>
               )
             })} */}
            </div>                   
  )
  })}
      </div>
    </div>
  );
}

export default NEO;