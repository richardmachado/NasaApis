import React, { useState, useEffect } from "react";

import PresentDay from './PresentDay'
import "./styles.css";

const KEY = process.env.REACT_APP_KEY;

const URL =
    `https://api.nasa.gov/insight_weather/?api_key=${KEY}&feedtype=json&ver=1.0`;
  
function MarsWeather() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    sol: "",
    minTemp: "",
    maxTemp: "",
    season: "",
    solDate: "",
    avgPressure: "",
  
  });

  function getWeather() {
      return fetch(URL)
          .then((res) => res.json()
            
    )
      .then((data) => {
        const { sol_keys, validity_checks, ...solData } = data;

        return Object.entries(solData).map(([sol, data]) => {
          if (sol_keys[sol_keys.length - 1] === sol) {
            console.log(loading);

            return {
              sol: sol,
            // maxTemp: data.AT.mx,
            // minTemp: data.AT.mn,
            date: new Date(data.First_UTC),
            season: data.Season,
            avgPressure: data.PRE.av,
            };
          } else {
            return null;
          }
        });
      });
  }

  useEffect(() => {
    getWeather().then((weather) => {
      for (let i = 0; i < weather.length; i++) {
        if (weather[i] !== null) {
          setWeather({
            sol: weather[i].sol,
            minTemp: weather[i].minTemp,
            maxTemp: weather[i].maxTemp,
            season: weather[i].season,
            solData: weather[i].date,
            avgPressure: weather[i].avgPressure,
          });
        }

        setLoading(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {console.log(weather)}
      <h1>Mars Insight Mission</h1>
      <p>
        InSight is taking daily weather measurements (temperature, wind,
        pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
        plain near Mars’ equator
      </p>

      {loading ? (
        <div className="loading-animation--parent">
          <div className="loading-animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <PresentDay
          sol={weather.sol}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          season={weather.season}
          date={weather.date}
          pressure={weather.avgPressure}
        ></PresentDay>
      )}
    </div>
  );
}

export default MarsWeather;
