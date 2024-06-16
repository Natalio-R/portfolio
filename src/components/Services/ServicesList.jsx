import React from "react";
import { ServicesCard } from "../../hooks/index";

const ServicesList = () => {
  return (
    <div className="services__content">
      <div className="services__list">
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/jfwzwlls.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Optimización web"
          desc="El flujo de las páginas es rápido. Pruebe mi sitio en GTMetrix."
        />
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Desarrollo rápido"
          desc="Con herramientas como React o Wordpress me permite crear sitios web rápidamente."
        />
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/rsbokaso.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Actualizaciones fácilmente"
          desc="Si se usa Wordpress entre otros CRMs, se puede actualizar el contenido muy facilmente."
        />
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/oqdmuxru.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Verificación por los mejores"
          desc="Muchas empresas han optado por usar CRMs o sistemas como React, Angular y muchos más."
        />
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/ijahpotn.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Flexible y escalable"
          desc="Construyo webs sólidas para que su sitio pueda crecer y escalar sin problema alguno."
        />
        <ServicesCard
          icon={`<lord-icon src="https://cdn.lordicon.com/eouimtlu.json" colors="primary:#000000" trigger="loop" delay="1000" style="width:54px;height:54px;"></lord-icon>`}
          name="Libertad de diseño"
          desc="Si puede imaginarlo, se podrá construir y ver en funcionamiento."
        />
      </div>
    </div>
  );
};

export default ServicesList;
