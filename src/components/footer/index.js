import React from "react";

function Footer() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <footer
        className="mt-auto"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        &copy; Helen Evans{" "}
        <a
          href="https://github.com/HelenLEvans"
          style={{ marginRight: "10px", marginLeft: "10px", color: "#26340D" }}
        >
          https://github.com/HelenLEvans
        </a>
        <a
          href="https://www.linkedin.com/in/helen-evans-249355273"
          style={{ marginLeft: "10px", color: "#26340D" }}
        >
          https://www.linkedin.com/in/helen-evans-249355273
        </a>{" "}
      </footer>
    </div>
  );
}
export default Footer;
