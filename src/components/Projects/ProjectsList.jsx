import React from "react";
import { ProjectsCard } from "../../hooks/index";
import projectsData from "../../data/projects.json";

const ProjectsList = () => {
  return (
    <div className="projects__list">
      {projectsData.map((project) => (
        <ProjectsCard
          key={project.id}
          name={project.name}
          image={project.src_image}
          localUrl={project.src_local}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
