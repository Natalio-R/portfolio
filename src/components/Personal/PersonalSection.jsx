import React from "react";

const PersonalSection = () => {
  const date = new Date();
  const year = date.getFullYear();
  const edad = year - 2001;
  const edadProgramacion = edad - (year - 2017);

  return (
    <section id="about">
      <div className="section__content">
        <h3 className="content__title">Hey, soy Natalio Rabasco</h3>
        <p className="content__desc">
          Si necesitas una mano en el mundo digital, simplemente quieres
          conocerme un poco más, tal vez saber algo más concreto sobre mi, o
          cualquier otro tema, pues te dejo por aquí algunos detalles al
          respecto para que le eches un vistazo:
        </p>
        <ul className="content__list">
          <li className="list__item">
            Tengo {edad} años, nací en un pueblo de Alicante donde resido
            actualmente.
          </li>
          <li className="list__item">
            Comencé con la programación por el 2017, cuando tenía{" "}
            {edadProgramacion} años.
          </li>
          <li className="list__item">
            Empecé en el mundo profesional poco después, hasta día de hoy que
            sigo disfrutando de lo increíble que es el mundo del desarrollo web.
          </li>
          <li className="list__item">
            Siempre estuve interesado en el mundo del emprendimiento y no paraba
            de buscar maneras para poder serlo, no fue hasta el 2023 que pude
            empezar como emprendedor mientras lo compagino con la programación.
          </li>
          <li className="list__item">
            Cada día trabajo para poder dar lo mejor de mí y avanzar con mis
            proyectos, incluso cogiendo nuevas ideas para un futuro seguir
            emprendiendo.
          </li>
        </ul>
        <a className="content__button" href="/about">
          Saber más
        </a>
      </div>
      <div className="section__spline">
        <spline-viewer url="https://prod.spline.design/o7s9S18LM69oPbxw/scene.splinecode"></spline-viewer>
      </div>
    </section>
  );
};

export default PersonalSection;
