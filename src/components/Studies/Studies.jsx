import React from "react";
import { Study } from "../../hooks/index";

const Studies = () => {
  return (
    <section className="section__container" data-aos="fade-up">
      <div className="container__grid">
        <div className="grid__section">
          <h2 className="section__name">/estudios</h2>
        </div>
        <div className="grid__list esp">
            <Study dateStart="Septiembre 2013" dateEnd="Junio 2018" place="Almoradí, Alicante" name="Educación Secundaria Obligatoria (ESO)" type="IES Antonio Sequeros" />
            <Study dateStart="Septiembre 2018" dateEnd="Junio 2021" place="Almoradí, Alicante" name="CFGM en Sistemas Microinformáticos y Redes" type="IES Antonio Sequeros" />
            <Study dateStart="Septiembre 2021" dateEnd="Junio 2023" place="Rojales, Alicante" name="CFGS en Desarrollo de Aplicaciones Web" type="IES La Encantá" />
        </div>
      </div>
    </section>
  );
};

export default Studies;
