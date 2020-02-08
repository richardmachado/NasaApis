import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import loading from '../loading.jpg'
import {Card } from 'react-bootstrap';


// function for today so that it automatically updates the site

var today = new Date()
var dd = String(today.getUTCDate()).padStart(2, '0');
var mm = String(today.getMonth()+1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd ;




// end of today function


function NEO() {
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
    return <div> <img src={loading} alt= "loading"></img> </div>;
  }
  return (
    <div className="App">
        <h1> Near Earth Objects  for {today}</h1> 
        <p className="paragraph">The challenge on this API was NASA uses GMT time while Date.now uses the time on your computer. The information would not display after 5PM Pacific since it was already the following day according to GMT</p>
        {neo.map(rock =>{
           return (
          
  <Card key = {rock.name} id="Card" border="light" text="light"style={{ width: '30rem' }}>
    <Card.Header  >Object Name: {rock.name}</Card.Header>
    <Card.Body>
      <Card.Title >Size : {rock.estimated_diameter.miles.estimated_diameter_max} miles</Card.Title>
      <Card.Text >
      Potentially hazardous: {`${rock.is_potentially_hazardous_asteroid}`}
      </Card.Text>
    </Card.Body>
  </Card>
          
            )
        })}

 
    </div>
  );
}

export default NEO;