import ProjectCard from "../../components/ProjectCard";
import MeetIO from "../../images/MeetIO.png";
import TarotTeller from "../../images/TarotTeller.png";
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
      title: "Project 3",
      description: "Project description here3",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
    },
    {
      title: "Project 4",
      description: "Project description here3",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
    },
    {
      title: "Project 5",
      description: "Project description here2",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
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
