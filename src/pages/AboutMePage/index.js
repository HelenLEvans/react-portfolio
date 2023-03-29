import React from "react";
import biopic from "/images/biopic.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Helen Louise Evans</h1>
          <p>Former air traffic controller, future web dev.</p>
        </div>
        <div className="col">
          <img src={biopic} alt="Helen Louise Evans"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
