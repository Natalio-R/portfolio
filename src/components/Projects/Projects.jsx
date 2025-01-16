import React from "react";
import { Project } from "../../hooks/index";
import { Globe, DollarSign, Layers} from "react-feather";

const Projects = () => {
  return (
    <section className="section__container" data-aos="fade-up">
      <div className="container__grid">
        <div className="grid__section">
          <h2 className="section__name">/proyectos</h2>
        </div>
        <div className="grid__list row">
            <Project name="Fractal Agency" icon={Globe} link="https://fractalagency.es" />
            <Project name="Crypto Search" icon={DollarSign} link="https://searchcrypto.netlify.app/" />
            <Project name="PokeMosta" icon={Layers} link="https://pokemosta.netlify.app/" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
