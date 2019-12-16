import React, { useState, useEffect } from "react";


import axios from "axios";



function NEO() {
  const [neo, setNeo] = useState([]);
  

  useEffect(() => {
    axios

    .get("https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4")   
      .then(response => {
        console.log(response.data.near_earth_objects['2019-12-16']);
        setNeo(response.data.near_earth_objects['2019-12-16']);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neo) {
    return <div>Loading ... </div>;
  }
  return (
    <div className="App">
        <h1>Today's Near Earth Objects </h1> 
        {neo.map(rocks =>{
           
            return (
            <div key={rocks.estimated_diameter.miles.estimated_diameter_max}>
               
            <h2 key={rocks.name}>Name of Object: {rocks.name}</h2>
            <p >Size : "{rocks.estimated_diameter.miles.estimated_diameter_max} miles"</p>
            {/* <p>Miss Distance:{rocks.close_approach_data.relative_velocity.miles_per_hour} </p> */}
            </div>
            )
        })}

 
    </div>
  );
}

export default NEO;