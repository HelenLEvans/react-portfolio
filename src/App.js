import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./pages/AboutMePage";
import ResumePage from "./pages/ResumePage";
import { useState } from "react";
import Footer from "./components/footer/index.js";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  return (
    <div className="vh-100">
      <nav>
        <ul>
          <li
            className={currentPage === "About Me" && "active"}
            onClick={() => {
              setCurrentPage("About Me");
            }}
          >
            About Me
          </li>
          <li
            className={currentPage === "Portfolio" && "active"}
            onClick={() => {
              setCurrentPage("Portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            className={currentPage === "Contact" && "active"}
            onClick={() => {
              setCurrentPage("Contact");
            }}
          >
            Contact
          </li>
          <li
            className={currentPage === "Resume" && "active"}
            onClick={() => {
              setCurrentPage("Resume");
            }}
          >
            Resume
          </li>
        </ul>
      </nav>
      {currentPage === "Contact" && <ContactPage />}
      {currentPage === "Portfolio" && <PortfolioPage />}
      {currentPage === "About Me" && <AboutMe />}
      {currentPage === "Resume" && <ResumePage />}
      <Footer />
    </div>
  );
}

export default App;
