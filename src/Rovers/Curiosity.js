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

// start date ==="2012-08-06"

const JSJoda = require("js-joda");
const LocalDate = JSJoda.LocalDate;

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

function Curiosity() {
  const [mars, setMars] = useState(0);
  const [camera, setCamera] = useState("RHAZ");

  const [day, setDay] = useState("2012-08-06");
  console.log("day", day);

  function getNumberOfDays( start, end ) {
    console.log(day)
    const end_date = new LocalDate.parse(`${day}`);
    const start_date = new LocalDate.parse("2012-08-06");

    return JSJoda.ChronoUnit.DAYS.between(start_date, end_date);
  }
  console.log("getnumberofdays", getNumberOfDays());

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  const handleSubmit = (e) => {
    setCamera(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${getNumberOfDays()}&camera=${camera}&api_key=${KEY}`
      )
      .then((response) => {
        setMars(response.data.photos);
        console.log(response.data.photos);
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
    <div className="body">
      <div className="mars">
        <div className="top-box">
          <h1 className="title">Mars Curiosity Rover Photos</h1>
          <label className="prompt" htmlFor="day">
            Enter a number - 0 is 1st day on Mars, etc <span> </span>
            <input
              type="date"
              onChange={(event) => handleChange(event)}
              name="day"
            ></input>
          </label>
          <label className="prompt" htmlFor="camera">
            Select a camera
            <select
              name="camera"
              onChange={(e) => handleSubmit(e)}
              form="camera"
            >
              <option value="RHAZ">Rear Hazard</option>
              <option value="FHAZ ">Front Hazard</option>
              <option value="MAST">Mast Mounted</option>
              <option value="CHEMCAM">Chem Cam</option>
              <option value="MAHLI">Mars Hand Lens Imager</option>
              <option value="MARDI">Mars Descent Imager</option>
              <option value="NAVCAM">NAVCAM</option>
            </select>
          </label>
          <p className="blank-response">
            if any entry gives a blank page, no photos are available that day
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
    </div>
  );
}

export default Curiosity;
