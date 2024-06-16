import React from "react";
import { Headers } from "../hooks/index";
import emailjs from "emailjs-com";

const Contact = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eodn6od",
        "template_9pkufkc",
        e.target,
        "ZD5i1HH2A5Yh9b43k"
      )
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <main id="contact">
      <Headers
        subtitle="Contacto"
        title="Empecemos"
        desc="¡Rellena el siguiente formulario y me pondré en contacto LO ANTES POSIBLE!"
      />
      <form action="/contact" onSubmit={enviarEmail} className="contact__form">
        <p className="form__info-text">*Campos obligatorios</p>
        <div className="form__group double">
          <div className="group__input">
            <input
              type="text"
              name="name"
              id="customerName"
              placeholder="Nombre *"
              required
            />
          </div>
          <div className="group__input">
            <input
              type="text"
              name="surname"
              id="customerSurname"
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div className="form__group double">
          <div className="group__input">
            <input
              type="email"
              name="email"
              id="customerEmail"
              placeholder="Correo electrónico *"
              required
            />
          </div>
          <div className="group__input">
            <input
              type="tel"
              name="tel"
              id="customerTel"
              placeholder="Teléfono de contacto *"
              required
            />
          </div>
        </div>
        <div className="form__group single">
          <div className="group__input">
            <input
              type="url"
              name="url"
              id="customerCurrentUrl"
              placeholder="URL del sitio web actual (si corresponde)"
            />
          </div>
        </div>
        <div className="form__group double">
          <div className="group__input">
            <select name="budget" id="customerBudget" required>
              <option>Presupuesto estimado *</option>
              <option value="600">Menos de 600€</option>
              <option value="2k">Entre 2k€ y 5k€</option>
              <option value="5k">Más de 5k€</option>
            </select>
          </div>
          <div className="group__input">
            <select name="services" id="customerServices" required>
              <option>Servicio necesario *</option>
              <option value="Design">Diseño</option>
              <option value="Develop">Desarrollo</option>
              <option value="DesingDevelop">Diseño y Desarrollo</option>
              <option value="Not">No lo se todavía</option>
            </select>
          </div>
        </div>
        <div className="form__group single">
          <div className="group__input">
            <textarea
              name="about"
              id="customerProject"
              rows={5}
              placeholder="Cuéntame un poco sobre el proyecto..."
            ></textarea>
          </div>
        </div>
        <div className="form__group single">
          <div className="group__input">
            <input
              type="text"
              name="found"
              id="customerFounded"
              placeholder="¿Cómo me encontraste?"
            />
          </div>
        </div>
        <div className="form__group single">
          <input type="submit" value="Empecemos" id="form__submit" />
        </div>
      </form>
    </main>
  );
};

export default Contact;
