import React, { useState } from "react";

const FAQsCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`faqs__content ${isVisible ? "visible" : "hidden"}`}
      id={props.id}
      onClick={toggleVisibility}
    >
      <div className="content__ask">
        <h4 className="ask__ask">{props.question}</h4>
        <box-icon
          name={isVisible ? "x" : "plus"}
          id="ask__icon"
          inherit
        ></box-icon>
      </div>
      <p className={`content__answer ${isVisible ? "visible" : "hidden"}`}>
        {props.answer}
      </p>
    </div>
  );
};

export default FAQsCard;
