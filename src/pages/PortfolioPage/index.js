import ProjectCard from "../../components/ProjectCard";
import MeetIO from "../../images/MeetIO.png";
import TarotTeller from "../../images/TarotTeller.png";
import NoteTaker from "../../images/NoteTaker.png";
import RegexTutorial from "../../images/RegexTutorial.png";
import PasswordGenerator from "../../images/PasswordGenerator.png";
//ES6 function
const PortfolioPage = () => {
  // I can interact with data in here

  const projectsArray = [
    {
      title: "MeetIO",
      description: "A group scheduling app with calendar and live chat",
      deployedLink: "https://meetio.herokuapp.com/",
      githubLink: "https://github.com/HelenLEvans/Meet-IO",
      imageLink: MeetIO,
    },
    {
      title: "Tarot Teller",
      description: "A daily tarot card reading",
      deployedLink: " https://helenlevans.github.io/Tarot-Teller/",
      githubLink: "https://github.com/HelenLEvans/Tarot-Teller",
      imageLink: TarotTeller,
    },
    {
      title: "Note Taker",
      description: "Write and save notes",
      deployedLink: "https://helenlevans.github.io/Note-Taker/",
      githubLink: "https://github.com/HelenLEvans/Note-Taker",
      imageLink: NoteTaker,
    },
    {
      title: "RegEx Tutorial",
      description: "Tutorial explaining a regular expression",
      deployedLink:
        "https://gist.github.com/HelenLEvans/afb359e32b866f1b03ff3c399bf99136",
      githubLink: "https://gist.github.com/HelenLEvans",
      imageLink: RegexTutorial,
    },
    {
      title: "Password Generator",
      description: "Generates random passwords upon request",
      deployedLink: "https://helenlevans.github.io/password-generator/",
      githubLink: "https://github.com/HelenLEvans/password-generator",
      imageLink: PasswordGenerator,
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-around h-100 border border-danger">
      {projectsArray.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default PortfolioPage;
