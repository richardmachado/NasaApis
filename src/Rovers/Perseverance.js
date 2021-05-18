import React, { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";
import "./Carousel.scss";
import "./rovers.css";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
};

const KEY = process.env.REACT_APP_KEY;

function Perseverance() {
  const [mars, setMars] = useState(0);
  const [day, setDay] = useState(1);
  const [camera, setCamera] = useState("REAR_HAZCAM_LEFT");

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  const handleSubmit = (e) => {
    setCamera(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${day}&camera=${camera}&api_key=${KEY}`
      )
      .then((response) => {
        // console.log(response.data);
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
            <option value="REAR_HAZCAM_LEFT">REAR HAZCAM LEFT</option>
            <option value="REAR_HAZCAM_RIGHT">REAR HAZCAM RIGHT</option>
            <option value="NAVCAM_LEFT">Navcam Left</option>
            <option value="NAVCAM_RIGHT">Navcam Right</option>
            <option value="FRONT_HAZCAM_RIGHT_A">Front Hazcam - Right</option>
            <option value="FRONT_HAZCAM_LEFT_A">Front Hazcam - Left</option>
            <option value="SKYCAM">MEDA Skycam</option>
            <option value="SHERLOC_WATSON">SHERLOC WATSON</option>
            <option value="EDL_RUCAM">Rover Up-Look Camera</option>
            <option value="EDL_RDCAM">Rover Down-Look Camera</option>
            <option value="EDL_DDCAM">Descent Stage Down-Look Camera</option>
            <option value="EDL_PUCAM1">Parachute Up-Look Camera A</option>
            <option value="EDL_PUCAM2">Parachute Up-Look Camera B</option>
            <option value="MCZ_RIGHT">MASTCAM-Z-RIGHT</option>
            <option value="MCZ_LEFT">MASTCAM-Z-LEFT</option>
          </select>
        </label>

        <p className="blank-response">
          If page is blank, no photos available that day
        </p>
      </div>
      <div className="container mt-5 carousel">
          <Slider {...settings}>
            {mars.map((photos) => {
              return (
                <div className="card-wrapper">
                  <div className="card">
                    <div className="card-image">
                      <a
                        href={photos.img_src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={photos.img_src} alt="nasa" />
                      </a>
                      <div>
                        Date: {photos.earth_date} - click on image to open in
                        new tab
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
    </div>
  );
}

export default Perseverance;
