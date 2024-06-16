import React from "react";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="navbar__container">
      <div className="navbar__content">
        <div className="navbar__title" onClick={handleClick}>
          <div className="title__image">
            <span>NR</span>
          </div>
          <div className="title__name">
            <span>Natalio R</span>
          </div>
        </div>
        <nav className="navbar__nav">
          <ul className="navbar__list">
            <li className="navbar__list_item">
              <a className="navbar__item_link" href="/#about">
                <lord-icon
                  src="https://cdn.lordicon.com/zfmcashd.json"
                  trigger="loop"
                  delay="1000"
                  style={({ width: "26px" }, { height: "26px" })}
                ></lord-icon>
                Sobre mi
              </a>
            </li>
            <li className="navbar__list_item">
              <a className="navbar__item_link" href="/#services">
                <lord-icon
                  src="https://cdn.lordicon.com/xjronrda.json"
                  trigger="loop"
                  delay="1000"
                  style={({ width: "26px" }, { height: "26px" })}
                ></lord-icon>
                Servicios
              </a>
            </li>
            <li className="navbar__list_item">
              <a className="navbar__item_link" href="/#projects">
                <lord-icon
                  src="https://cdn.lordicon.com/yqiuuheo.json"
                  trigger="loop"
                  delay="1000"
                  style={({ width: "26px" }, { height: "26px" })}
                ></lord-icon>
                Proyectos
              </a>
            </li>
            <li className="navbar__list_item">
              <a className="navbar__item_link" href="/contact">
                <lord-icon
                  src="https://cdn.lordicon.com/ylvuooxd.json"
                  trigger="loop"
                  delay="1000"
                  style={({ width: "26px" }, { height: "26px" })}
                ></lord-icon>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="navbar__buttons">
          <div className="buttons__button">
            <a className="button__link" href="/contact">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
