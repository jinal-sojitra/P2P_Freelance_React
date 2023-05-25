import React from "react";

const ProjectItem = ({project}) => {

  // let {title, description, technologies, budget}=props
  return (
    <div>
      <div className="project_card" style={{"width": "18rem","margin":"10px"}}>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{project.technologies}</h6>
          <p className="card-text">
            {project.description}
          </p>
          {/* <a href="/" className="card-link">
            Card link
          </a> */}
          <a href="/" className="card-link">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
