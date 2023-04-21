import React from "react";

const ResumePage = () => {
  return (
    <div className="container">
      <button className="resume-button">
        <a
          href="Helen_Evans_Resume.pdf"
          download="Helen_Evans_Resume.pdf"
          class="resume-button"
        >
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default ResumePage;
