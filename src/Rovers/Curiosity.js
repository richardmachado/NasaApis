import React, { useState, useEffect } from "react";
import axios from 'axios';
import loading from '../loading.jpg'
import "../App.css";


function Curiosity () {
    const [mars, setMars] = useState(0);
    const [day, setDay] = useState(0);
    const handleChange = event => {
      setDay(event.target.value);
    };

    

    useEffect(() => {
      
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${day}&camera=RHAZ&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4`)
          .then(response => {
          console.log(response.data.photos);
          setMars(response.data.photos);
         
        })
        .catch(err => {
          console.log(err);
        });
    },[day]);
    if (!mars) {
      return <div> <img src={loading} alt= "loading"></img> </div>;
    }
  
    return (
      <div className="App">
  <h1>Mars Curiosity Rover Photos</h1>
  <p className="header">This API is designed to collect image data gathered by NASA's Curiosity rover on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.</p>



  <label className= "prompt" htmlFor="day">
          Enter a day - 0 is 1st day on Mars, etc
        <input type="text" 
        onChange={event => handleChange(event)}
        placeholder="day"
        name ="day">
        </input>
     
  </label>

      <p> if any entry gives a blank page, that means no photos are available that day</p>
       <p> Camera: FHAZ RHAZ MAST CHEMCAM MAHLI MARDI NAVCAM -- Need to make these live links to update the camera</p>
       
       {mars.map(photos => {
         
        return  <div key={photos.id}>
          <img className="image" src ={photos.img_src} alt ="img"/>
          
         <p>Camera: {photos.camera.full_name}</p>
         <p>Date / Time = {photos.earth_date}</p>
         </div>
       })} 
      </div>
    );
  }
  
  export default Curiosity;