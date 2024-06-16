import React from "react";
import { Headers, ServicesList } from "../../hooks/index";

const Services = () => {
  return (
    <section id="services">
      <Headers
        subtitle="Servicios"
        title="Mis servicios"
        desc="Estos son algunos de mis servicios"
      />
      <ServicesList />
    </section>
  );
};

export default Services;
