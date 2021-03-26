import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import styled from "styled-components";

const Title = styled.p`
  width: 80%;
  margin-left: 8rem;
`;
const KEY = process.env.REACT_APP_KEY;

function EPIC() {
  const [neo, setNeo] = useState(0);
  // console.log(posts)

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${KEY}`)
      .then((response) => {
        //   console.log(response);
        setNeo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!neo) {
    return <div>Loading ... </div>;
  }

  return (
    <div className="App">
      <h1>NASA EPIC API</h1>
      <Title>
        The EPIC API provides information on the daily imagery collected by
        DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely
        positioned at the Earth-Sun Lagrange point, EPIC provides full disc
        imagery of the Earth and captures unique perspectives of certain
        astronomical events such as lunar transits using a 2048x2048 pixel CCD
        (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain
        telescope.
      </Title>
      {neo.map((asteroids) => {
        const Image = `https://epic.gsfc.nasa.gov/archive/natural/2019/06/27/png/${asteroids.image}.png`;
        return (
          <div key={asteroids.date}>
            <img className="image" src={Image} alt="img" />

            <p>Caption: {asteroids.caption}</p>
            <p>Date / Time = {asteroids.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EPIC;
