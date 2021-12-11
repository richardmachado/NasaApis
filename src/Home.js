import React from "react";
import "./App.css";

export default function Home() {
  
  return (
    <>
      <div className="homepage">
        <h2>NASA APIs </h2>
        <div className="group">
          <img
            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            alt="nasa logo"
          />
        </div>

        <hr />

        <h3>Click the links above to see different APIs in use</h3>
        <h3>Built using React, SPA, single page set up</h3>
        <p style={{ color: "white", fontSize: "3rem" }}>
          This was a valuable exercise in consuming different API's that return
          different json responses
        </p>
      </div>
    </>
  );
}
