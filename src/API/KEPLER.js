import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import loading from '../loading.jpg'


function Kepler () {
    
    const [ikep, setKep] = useState(0);
  

  
  
    useEffect(() => {
      
    axios.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=json")
          .then(response => {
          console.log(response);
          setKep(response);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    if (!ikep) {
      return <div> <img src={loading} alt= "loading"></img> </div>;
    }
  
    return (
      <div className="App">
  <h1>Keppler Confirmed Planets</h1>
    {ikep.map(planets => {
            
            return  <div>
           <h1>{planets.id.dec}</h1>  
           
          
           </div>
        })} 
 
</div>

       
    );
  }
  
  export default Kepler;