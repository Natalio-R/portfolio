import React from "react";
import { WhyMeCard } from "../../hooks/index";

const WhyMeList = () => {
  return (
    <div className="whyme__list">
      <WhyMeCard
        subtitle="Diseños"
        title="Ten una web completamente tuya"
        desc="Realizo el diseño de cada web y después las llevo a producción. Podrá ver el diseño antes de desarrollarlo."
        image="WhyMe01"
      />
      <WhyMeCard
        subtitle="Confiable"
        title="No le dejo solo despúes del trabajo"
        desc="Tengo compromiso con los clientes. No le dejaré solo después del proyecto."
        image="WhyMe02"
      />
      <WhyMeCard
        subtitle="Calidad"
        title="Sitios web fáciles de entender"
        desc="Intento dentro de lo posible que todos mis proyectos sean realizados de una manera fácil de entender e intuitivos."
        image="WhyMe03"
      />
      <WhyMeCard
        subtitle="Garantía"
        title="¡Pruébame, sin riesgos!"
        desc="Si no está satisfecho con el diseño después del primer borrador, le reembolsaré su depósito, sin hacer preguntas."
        image="WhyMe04"
      />
    </div>
  );
};

export default WhyMeList;
