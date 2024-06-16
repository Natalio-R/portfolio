import React from "react";
import { Headers, StepsList } from "../../hooks/index";

const Steps = () => {
  return (
    <section id="steps">
      <Headers subtitle="Proceso" title="Mis pasos hasta día de hoy" />
      <StepsList />
    </section>
  );
};

export default Steps;
