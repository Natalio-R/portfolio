import React from "react";

const Project = (props) => {
  const { link, icon: Icon, name } = props;

  return (
    <a href={link} className="project__container">
      <div className="project__icon">
        <Icon size={16} />
        <div className="bg-style"></div>
      </div>
      <h2 className="project__name">{name}</h2>
    </a>
  );
};

export default Project;
