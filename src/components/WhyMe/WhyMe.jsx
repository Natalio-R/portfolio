import React from "react";
import { Headers, WhyMeList } from "../../hooks/index";

const WhyMe = () => {
  return (
    <section id="whyme">
      <Headers
        subtitle="¿Por qué yo?"
        title="Diseños llevadsos a realidad, con un poco de esencia"
      />
      <WhyMeList />
    </section>
  );
};

export default WhyMe;
