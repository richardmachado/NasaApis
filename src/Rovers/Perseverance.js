import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "./rovers.css";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const KEY = process.env.REACT_APP_KEY;

function Perseverance() {
  const [mars, setMars] = useState(0);
  const [day, setDay] = useState(1);
  const [camera, setCamera] = useState("NAVCAM_LEFT");

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  const handleSubmit = (e) => {
    setCamera(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        // `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${KEY}`
        `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${day}&camera=${camera}&api_key=${KEY}`


      )
      .then((response) => {
        console.log(response.data);
        setMars(response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [day, camera]);
  if (!mars) {
    return (
      <div className="sweet-loading">
        <ClipLoader css={override} size={150} color={"#123abc"} />
      </div>
    );
  }

  return (
    <div className="mars">
      <div className="top-box">
        <h1 className="title">Mars Perseverance Rover Photos</h1>
        {/* <p className="header">This API is designed to collect image data gathered by NASA's Spirit 
  rover on Mars and make it more easily available to other developers, educators, and citizen 
  scientists.</p> */}

         <label className="prompt" htmlFor="day">
          Enter a number - 0 is 1st day on Mars, etc<span> </span>
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            placeholder="sol"
            name="day"
          ></input>
        </label>

        <label className="prompt" htmlFor="camera">
          Select a camera
          <select name="camera" onChange={(e) => handleSubmit(e)} form="camera">
            <option value="NAVCAM_LEFT">Navcam Left</option>
            <option value="NAVCAM_RIGHT">Navcam Right</option>
            <option value="REAR_HAZCAM_LEFT">REAR HAZCAM LEFT</option>
            <option value="REAR_HAZCAM_RIGHT">REAR HAZCAM RIGHT</option>
            <option value="FRONT_HAZCAM_RIGHT_A">Front Hazard Avoidance Camera - Right</option>
            <option value="FRONT_HAZCAM_LEFT_A">Front Hazard Avoidance Camera - Left</option>
            {/* <option value="SHERLOC">Sherloc</option> */}

            <option value="SKYCAM">MEDA Skycam</option>
           
          </select>
        </label> */}

        <p className="blank-response">
          {" "}
         Not all cameras are listed
        </p> 
      </div>
      {mars.map((photos) => {
        return (
          <div key={photos.id}>
            <img className="image" src={photos.img_src} alt="img" />
            <p className="prompt">Date = {photos.earth_date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Perseverance;
