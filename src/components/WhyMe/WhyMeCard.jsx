import React from "react";
import WhyMe01 from "../../assets/images/whyme/WhyMe-Image__01.png";
import WhyMe02 from "../../assets/images/whyme/WhyMe-Image__02.png";
import WhyMe03 from "../../assets/images/whyme/WhyMe-Image__03.png";
import WhyMe04 from "../../assets/images/whyme/WhyMe-Image__04.png";

const WhyMeCard = (props) => {
  const images = {
    WhyMe01: WhyMe01,
    WhyMe02: WhyMe02,
    WhyMe03: WhyMe03,
    WhyMe04: WhyMe04,
  };

  return (
    <div className="whyme__card">
      <div className="card__content">
        <div className="content__header">
          <h4 className="content__subtitle">{props.subtitle}</h4>
          <h3 className="content__title">{props.title}</h3>
        </div>
        <p className="content__desc">{props.desc}</p>
      </div>
      <div className="card__image">
        <img src={images[props.image]} alt="WhyMe_Image" />
      </div>
    </div>
  );
};

export default WhyMeCard;
