import React from "react";
import { MapPin, Briefcase } from "react-feather";

const Study = (props) => {
  return (
    <article className="study__container">
      <div className="study__date-link">
        <div className="study__date-range">
          <span className="date-start">{props.dateStart}</span>
          <span className="separate"></span>
          <span className="date-end">{props.dateEnd}</span>
        </div>
      </div>
      <h2 className="study__name">{props.name}</h2>
      <div className="study__info">
        <h3 className="study__type">
          <Briefcase size={12} />
          <p className="type__name">{props.type}</p>
        </h3>
        <div className="separate"></div>
        <div className="study__place">
          <MapPin size={12} />
          <p className="place__name">{props.place}</p>
        </div>
      </div>
      <div className="bg-style"></div>
    </article>
  );
};

export default Study;
