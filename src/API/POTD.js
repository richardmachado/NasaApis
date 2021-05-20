import React, { Component } from "react";
import DateInput from "./Datepicker";
import Photo from "../PhotoCard";

const KEY = process.env.REACT_APP_KEY;

class App extends Component {
  state = {
    date: new Date(),
    photo: "",
  };
  randomDate = (start, end) => {
    // return random date between start of Nasa POD and current Date
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  handleClick = (date) => {
    // generates random date and passes it into our
    // changeDate function which also updates state and
    // fetches a photo again
    // first available date is 06/16/1995
    let ranDate = this.randomDate(new Date(1995, 0o6 - 1, 16), new Date());
    this.changeDate(ranDate);
  };
  formatDate = (date) => {
    // converts date to yyyy-mm-dd
    return date.toISOString().split("T")[0];
  };
  changeDate = (date) => {
    this.setState({ date: date });
    this.getPhotoByDate(this.formatDate(date));
  };
  getPhotoByDate = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((photoData) => {
        this.setState({ photo: photoData });
      });
  };
  // lifecycle method that render photo before app renders
  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ photo: json });
      });
  }

  render() {
    // Style for header
    const headerStyle = {
      textAlign: "center",
    };
    const box = {
      height: "1000px",
      width: "50%",
    };
    return (
      <div className={box}>
        <div>
          <h2 style={headerStyle}>NASA's Astronomy Picture of the Day</h2>
          <p>
            This API incorporates several different components, such as a
            datepicker, and a random date picker. The full code used can be
            found <span></span>
            <a
              href="https://github.com/richardmachado/NasaApis/blob/gh-pages/src/API/POTD.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
          <DateInput
            date={this.state.date}
            changeDate={this.changeDate}
            handleClick={this.handleClick}
          />
          <Photo photo={this.state.photo} />
        </div>
      </div>
    );
  }
}
export default App;
