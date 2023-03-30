const ProjectCard = ({ project }) => {
  const { title, description, deployedLink, imageLink, githubLink } = project;

  return (
    <div className="card m-3" style={{ width: "18rem", height: "25rem" }}>
      <img src={imageLink} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={deployedLink} className="btn btn-primary">
          Deployed App
        </a>
        <a href={githubLink} className="btn btn-primary">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
