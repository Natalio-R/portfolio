import React, { useState } from "react";

const StepsCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`steps__card ${isVisible ? "visible" : "hidden"}`}
      onClick={toggleVisibility}
    >
      <div className="card__step">
        <div className="step__step">
          <h3 className="step__name">
            <span>{props.step}</span> {props.name}
          </h3>
          <box-icon name={isVisible ? "x" : "plus"} id="step__icon"></box-icon>
        </div>
        <div className="step__lines">
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
          <div className="lines__line"></div>
        </div>
      </div>
      <div className={`card__content ${isVisible ? "visible" : "hidden"}`}>
        <p className="content__desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default StepsCard;
