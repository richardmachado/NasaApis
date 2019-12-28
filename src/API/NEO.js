import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import loading from '../loading.jpg'


// function for today so that it automatically updates the site

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd ;
// end of today function


function NEO() {
  const [neo, setNeo] = useState([]);


  useEffect(() => {
    axios

      .get("https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4")   
      .then(response => {
         console.log(response.data.near_earth_objects[today]);
       
 
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
        {neo.map(rock =>{
           
            return (
            <div className="neo-objects" key={rock.estimated_diameter.miles.estimated_diameter_max}>
               
                <h2 key={rock.name}>Name of Object: {rock.name}</h2>
                <h2>Size : {rock.estimated_diameter.miles.estimated_diameter_max} miles</h2>
                <h3>Potentially hazardous: {`${rock.is_potentially_hazardous_asteroid}`} </h3>
            </div>
            )
        })}

 
    </div>
  );
}

export default NEO;