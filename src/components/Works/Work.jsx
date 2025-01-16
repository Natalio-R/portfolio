import React from "react";
import { ArrowUpRight, MapPin, Briefcase } from "react-feather";

const Work = (props) => {
  return (
    <a href={props.link} className="work__container">
      <div className="work__date-link">
        <div className="work__date-range">
          <span className="date-start">{props.dateStart}</span>
          <span className="separate"></span>
          <span className="date-end">{props.dateEnd}</span>
        </div>
        <div className="work__external-link">
          <ArrowUpRight size={12} />
        </div>
      </div>
      <h2 className="work__name">{props.name}</h2>
      <div className="work__info">
        <h3 className="work__company">
          <Briefcase size={12} />
          <p className="company__name">{props.company}</p>
        </h3>
        <div className="separate"></div>
        <div className="work__place">
          <MapPin size={12} />
          <p className="place__name">{props.place}</p>
        </div>
      </div>
      <div className="bg-style"></div>
    </a>
  );
};

export default Work;
