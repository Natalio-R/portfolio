import React from "react";
import { Work } from "../../hooks/index";

const Works = () => {
  return (
    <section className="section__container" data-aos="fade-up">
      <div className="container__grid">
        <div className="grid__section">
          <h2 className="section__name">/trayectoria</h2>
        </div>
        <div className="grid__list">
            <Work dateStart="Febrero 2021" dateEnd="Marzo 2023" place="Almoradí, Alicante" name="Responsable de desarrollo web" company="MOVILEUROPA SL" link="https://movileuropa.com" />
            <Work dateStart="Marzo 2023" dateEnd="Mayo 2023" place="Paola, Malta" name="Desarrollo web y redes sociales" company="SALTWAVE SL" link="https://saltwave.eu" />
            <Work dateStart="Junio 2023" dateEnd="Julio 2023" place="Madrid, Madrid" name="Diseño de páginas web" company="Impacto SEOmarketing" link="https://impactoseo.com/" />
            <Work dateStart="Julio 2023" dateEnd="Actualidad" place="San Juan, Alicante" name="Desarrollador front-end" company="NTT Data" link="https://nttdata.com" />
            <Work dateStart="Junio 2023" dateEnd="Actualidad" place="Alicante, Alicante" name="Co-Founder" company="Fractal Agency" link="https://fractalagency.es" />
        </div>
      </div>
    </section>
  );
};

export default Works;
