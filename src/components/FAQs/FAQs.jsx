import React from "react";
import { Headers, FAQsList } from "../../hooks/index";

const FAQs = () => {
  return (
    <section id="faqs">
      <Headers subtitle="FAQs" title="Preguntas Frecuentes" />
      <FAQsList />
    </section>
  );
};

export default FAQs;
