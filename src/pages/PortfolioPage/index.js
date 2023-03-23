import ProjectCard from "../../components/ProjectCard";

//ES6 function
const PortfolioPage = () => {
  // I can interact with data in here

  const projectsArray = [
    {
      title: "Project 1",
      description: "Project description here1",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
    },
    {
      title: "Project 2",
      description: "Project description here2",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
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
      title: "Project 3",
      description: "Project description here3",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
    },
    {
      title: "Project 2",
      description: "Project description here2",
      deployedLink: "www.google.com",
      githubLink: "ww.github.com",
      imageLink:
        "https://www.shutterstock.com/image-illustration/3d-render-abstract-neon-background-260nw-1909083022.jpg",
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
      title: "Project 3",
      description: "Project description here3",
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
