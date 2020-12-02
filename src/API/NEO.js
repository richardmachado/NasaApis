import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import classNames from 'classnames';

import NEOKey from "./NEOKey"
import "./NEO.css"

var today = moment().utc(false).format("YYYY-MM-DD");
var tomorrow = moment().utc(false).add(1, 'd').format("YYYY-MM-DD");
var dayaftertomorrow = moment().utc(false).add(2, 'd').format("YYYY-MM-DD");
var twodaysaftertomorrow = moment().utc(false).add(3, 'd').format("YYYY-MM-DD");
var threedaysaftertomorrow = moment().utc(false).add(4, 'd').format("YYYY-MM-DD");
var fourdaysaftertomorrow = moment().utc(false).add(5, 'd').format("YYYY-MM-DD");
var fivedaysaftertomorrow = moment().utc(false).add(6, 'd').format("YYYY-MM-DD");
var sixdaysaftertomorrow = moment().utc(false).add(7, 'd').format("YYYY-MM-DD");

// function to add commas to really large numbers

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// secret NASA Key
const KEY = process.env.REACT_APP_KEY;

function NEO() {
  const [neo, setNeo] = useState([]);
  const [date, setDate] = useState(today)

  const handleSubmit = e => {
    setDate(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/feed/?date=${today}?detailed=true&api_key=${KEY}`)   
      .then(response => {
        // console.log(response.data.near_earth_objects)
        setNeo(response.data.near_earth_objects[date])
      })
      .catch(err => {
        console.log(err);
      });
  }, [date]);

  return (
    <div className="body">
      <div className="container">
        <h1 className="display-4 my3"><span className="text-dark"> Near Earth Objects </span>  for  {date}</h1>        
        <NEOKey />  
        <label className="prompt" htmlFor="date">
         Select a Date
         <select name="date" 
          onChange={e => handleSubmit(e)}
          form="date">
            <option value={today}>{today}</option>  
            <option value={tomorrow}>{tomorrow}</option>
            <option value={dayaftertomorrow}>{dayaftertomorrow}</option>
            <option value={twodaysaftertomorrow}>{twodaysaftertomorrow}</option> 
            <option value={threedaysaftertomorrow}>{threedaysaftertomorrow}</option> 
            <option value={fourdaysaftertomorrow}>{fourdaysaftertomorrow}</option> 
            <option value={fivedaysaftertomorrow}>{fivedaysaftertomorrow}</option> 
            <option value={sixdaysaftertomorrow}>{sixdaysaftertomorrow}</option> 
        </select>
      </label>
        {neo.map(rock => {
          return (
           <div className="results" key={rock.id}>
            <h4 className="mb3" key={rock.name} >Object Name: <span className={classNames({
              'text-danger': !rock.name,
              'text-success': rock.name
            })}>{rock.name}</span></h4> 
              <p className="size">
              Size(Maximum Diameter): {Math.round(((rock.estimated_diameter.feet.estimated_diameter_max)) * 100) / 100} feet
              </p> 
               <p className="size">
                Closest Approach Date: {rock.close_approach_data[0].close_approach_date}
                </p>
                <p className="size">
                Miss Distance : {numberWithCommas(Math.round(rock.close_approach_data[0].miss_distance.miles))}
                    <span> </span>miles
                </p>
                <p className="size">
                Relative Velocity : {numberWithCommas(Math.round(rock.close_approach_data[0].relative_velocity.miles_per_hour))}
                    <span> </span>miles per hour
                </p>
            </div>                   
  )})}
      </div>
    </div>
  );
}

export default NEO;