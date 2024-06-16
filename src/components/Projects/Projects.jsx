import React from "react";
import { Headers, ProjectsList } from "../../hooks/index";

const Projects = () => {
  return (
    <section id="projects">
      <Headers
        subtitle="Proyectos"
        title="Mis últimos proyectos"
        desc="Descubre los proyectos de los cuales dedico la mayor parte de mi tiempo"
      />
      <ProjectsList />
    </section>
  );
};

export default Projects;
