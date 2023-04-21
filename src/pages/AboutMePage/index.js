import React from "react";
import biopic from "../../images/biopic.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Helen Louise Evans</h1>
          <h2>Former air traffic controller, future web dev.</h2>
          <h4>Work Experience</h4>
          <p>
            Air Traffic Control Specialist, Federal Aviation Administration
            <br />
            November 2006 - February 2021
          </p>
          <h4>Education</h4>
          <p>
            University of Oregon
            <br />
            Full Stack Coding Bootcamp
            <br />
            September 2022 - April 2023
          </p>
          <p>
            Southern Illinois University
            <br />
            Bachelor's of Science in Aviation Management
            <br />
            August 1998 - August 2002
          </p>
        </div>
        <div className="col">
          <img src={biopic} alt="Helen Louise Evans" id="me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
