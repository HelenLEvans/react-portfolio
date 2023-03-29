import React from "react";
import biopic from "../../images/biopic.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Helen Louise Evans</h1>
          <h2>Former air traffic controller, future web dev.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
