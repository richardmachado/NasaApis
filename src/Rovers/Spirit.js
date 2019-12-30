import React, { useState, useEffect } from "react";
import axios from 'axios';
import loading from '../loading.jpg'
import "../App.css";

function Spirit () {
    const [mars, setMars] = useState(0);
    const [day, setDay] = useState(1);
    const [camera, setCamera]= useState("RHAZ")

    const handleChange = event => {
      setDay(event.target.value);
     
    };
    const handleSubmit = e => {
      setCamera(e.target.value);

    }
  
  
  
    useEffect(() => {
      
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${day}&camera=${camera}&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4`)
          .then(response => {
          console.log(response.data.photos);
          setMars(response.data.photos);
        })
        .catch(err => {
          console.log(err);
        });
    }, [day, camera]);
    if (!mars) {
      return <div> <img src={loading} alt= "loading"></img> </div>;
    }
  
    return (
      <div className="App">
  <h1>Mars Spirit Rover Photos</h1>
  <p className="header">This API is designed to collect image data gathered by NASA's Spirit 
  rover on Mars and make it more easily available to other developers, educators, and citizen 
  scientists. This API is maintained by Chris Cerami.</p>
  <h1> Day Selected {day} Camera Selected {camera}</h1>     
      <label htmlFor="day">
          Enter a number - 0 is 1st day on Mars, etc
        <input type="text" 
        onChange={event => handleChange(event)}
        placeholder="day"
        name ="day">

        </input>
      </label>

       <label htmlFor="camera">
         Select a camera
         <select name="camera" 
          onChange={e => handleSubmit(e)}
          form="camera">
          <option value="RHAZ">Rear Hazard</option>
          <option value="FHAZ ">Front Hazard</option>
          <option value="NAVCAM">Navigation Camera</option>
          <option value="PANCAM">Panoramic Camera</option>
          <option value="MINITES">MiniTES</option>
        </select>
      </label>
        
      <p> if any entry gives a blank page, that means no photos are available that day</p>
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
  
  export default Spirit;