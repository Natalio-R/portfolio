import React from "react";
import Pr001Img from "../../assets/images/projects/PR_001.png";
import Pr002Img from "../../assets/images/projects/PR_002.png";
import Pr003Img from "../../assets/images/projects/PR_003.png";

const ProjectCard = (props) => {
  const images = {
    Pr001Img: Pr001Img,
    Pr002Img: Pr002Img,
    Pr003Img: Pr003Img,
  };

  return (
    <a className="project__card" href={props.localUrl}>
      <img className="card__image" src={images[props.image]} alt="Imagen" />
      <div className="card__info">
        <h3 className="info__title">{props.name}</h3>
      </div>
    </a>
  );
};

export default ProjectCard;
