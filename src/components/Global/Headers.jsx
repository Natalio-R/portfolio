import React from "react";

const Headers = (props) => {
  return (
    <header className="header__content">
      <h3 className="header__subtitle">{props.subtitle}</h3>
      <h2 className="header__title">{props.title}</h2>
      <p className="header__desc">{props.desc}</p>
    </header>
  );
};

export default Headers;
