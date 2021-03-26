import React from "react";
import Moment from "react-moment";
import "./PresentDay.scss";

function PresentDay(props) {
  return (
    <div className="present-day">
      <div className="present-day--part-left">
        <div className="present-day--section-one section-one">
          <p className="section-one__sol">Sol {props.sol}</p>
          <div className="section-one__date">
            <Moment format="DD-MM-YYYY">{props.date}</Moment>
          </div>

          <p className="section-one__season">
            Season <span>{props.season}</span>
          </p>
        </div>
      </div>
      <div className="present-day--part-right">
        <div className="present-day--section-two section-two">
          <p className="section-two__min-temp">
            <b>Minimum Temperature</b> <br></br>
            <span>{Math.floor(props.minTemp)}</span> {"\u00b0"}C
          </p>

          <p className="section-max-temp">
            <b>Maximum Temperature</b> <br></br>
            <span>{Math.floor(props.maxTemp)}</span> {"\u00b0"}C
          </p>
          <p>
            Possible Mission Failure - Probe is stuck at 14 inches underground,
            read more{" "}
            <span>
              <a
                style={{ color: "blue" }}
                href="https://www.technologyreview.com/2021/01/20/1016432/mars-insight-heat-probe-mole-failed/"
              >
                here
              </a>
            </span>{" "}
          </p>
        </div>

        <div className="present-day--section-three section-three">
          <p className="section-three__pressure">
            <b>Pressure</b> <br></br> <span>{Math.floor(props.pressure)}</span>{" "}
            Pascal
          </p>
          <p>1 Earth ATM = 101,325 Pascal</p>
        </div>
      </div>
    </div>
  );
}

export default PresentDay;
