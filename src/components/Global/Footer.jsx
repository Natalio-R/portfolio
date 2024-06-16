import React from "react";
import profile from "../../assets/images/NatalioR.jpg";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer className="footer__content">
        <div className="content__info">
          <div className="info__image">
            <img
              src={profile}
              width="56px"
              height="56px"
              alt="Natalio Rabasco"
            />
          </div>
          <div className="info__texts">
            <div className="texts__name">
              <h2>Natalio Rabasco</h2>
            </div>
            <div className="texts__type">
              <p>Desarrollador, Diseñador & Emprendedor</p>
            </div>
          </div>
        </div>
        <div className="content__separator"></div>
        <div className="content__links">
          <ul className="links__menu">
            <li className="menu__link">
              <a
                href="https://www.instagram.com/natalio_lp/"
                className="link__link"
              >
                Instagram
              </a>
            </li>
            <li className="menu__link">
              <a
                href="https://www.threads.net/@natalio_lp"
                className="link__link"
              >
                Threads
              </a>
            </li>
            <li className="menu__link">
              <a href="https://x.com/NatalioRabasco" className="link__link">
                X
              </a>
            </li>
            <li className="menu__link">
              <a
                href="https://linkedin.com/in/nataliorabasco"
                className="link__link"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="content__copy">
          <p className="copy__text">
            &copy;2024 Natalio Rabasco. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
