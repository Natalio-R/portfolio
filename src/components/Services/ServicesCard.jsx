import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="services__card">
      <div
        className="card__icon"
        dangerouslySetInnerHTML={{ __html: props.icon }}
      />
      <h2 className="card__title">{props.name}</h2>
      <p className="card__desc">{props.desc}</p>
    </div>
  );
};

export default ServicesCard;
