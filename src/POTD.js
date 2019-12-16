import React, {useState, useEffect} from "react";
import axios from "axios"

import PhotoCard from "./PhotoCard"
import styled from 'styled-components';

// import DateMod from './DatePicker';

const Headerfont = styled.div`
color: white;

text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;



function Photo () {
  const [nasaImg, setNasaImg] = useState([]);
  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4")
    .then(res => {
      setNasaImg(res.data);
      // console.log(res.data);
    });

  }, []);

  return (
    <div className="App">
      <Headerfont>
      <div class="center">
        <h1>NASA PHOTO OF THE DAY</h1>
       
        </div>
        </Headerfont>
      <PhotoCard title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date} /> 
    </div>
  );
}

export default Photo;