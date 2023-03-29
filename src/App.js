import "./App.css";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./pages/AboutMePage";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  return (
    <div className="vh-100">
      <div className="border border-primary">
        Navbar
        <ul>
          <li
            onClick={() => {
              setCurrentPage("About Me");
            }}
          >
            About Me
          </li>
          <li
            onClick={() => {
              setCurrentPage("Portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              setCurrentPage("Contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      {currentPage === "Contact" && <ContactPage />}
      {currentPage === "Portfolio" && <PortfolioPage />}
      {currentPage === "About Me" && <AboutMe />}
    </div>
  );
}

export default App;
