import React from "react";
import mainImg from "../../assets/images/CardsUI.png";

const Main = () => {
  return (
    <main id="main">
      <div className="main__content">
        <div className="content__main">
          <div className="main__subtitle">
            <p>
              La <span>frecuencia</span> es lo que hace la diferencia
            </p>
          </div>
          <h1 className="main__title">
            Soy <span>Natalio Rabasco</span>, Desarrollador Web y Emprendedor
          </h1>
        </div>
        <div className="main__buttons">
          <div className="main__button">
            <div className="button_primary">
              <a href="/#projects" className="button__text">
                Proyectos
              </a>
            </div>
          </div>
          <div className="main__button">
            <div className="button_secondary">
              <a href="/contact" className="button__text">
                Trabaja conmigo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main__spline">
        <img src={mainImg} alt="Card UI Design" />
      </div>
    </main>
  );
};

export default Main;
