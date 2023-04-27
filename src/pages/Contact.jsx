import React from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col items-center justify-start mx-6 md:mx-8 lg:mx-auto max-w-screen-lg pb-20 pt-10">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black mb-6 text-center">
        {t("contact.title")}
      </h1>
      <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-8 text-center">
        {t("contact.subtitle")}
      </p>

      <div className="px-0 md:px-8 lg:px-40 w-full">
        <form
          action="/contact"
          onSubmit={enviarEmail}
          className="w-full p-6 md:p-10 bg-gray-900 text-white rounded-xl md:rounded-3xl shadow-xl"
        >
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300  text-sm rounded-lg block w-full p-4 bg-gray-800 placeholder-gray-400 text-white focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="website"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.website")}
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="budget"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.budget")}
            </label>
            <select
              id="budget"
              name="budget"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            >
              <option selected>{t("contact.select")}</option>
              <option value="design">{t("contact.bud-01")}</option>
              <option value="development">{t("contact.bud-02")}</option>
              <option value="designanddevelopment">
                {t("contact.bud-03")}
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label
              for="services"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.service")}
            </label>
            <select
              id="services"
              name="services"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            >
              <option selected>{t("contact.select")}</option>
              <option value="design">{t("contact.ser-01")}</option>
              <option value="development">{t("contact.ser-02")}</option>
              <option value="designanddevelopment">
                {t("contact.ser-03")}
              </option>
              <option value="notsure">{t("contact.ser-04")}</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              for="about"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.about")}
            </label>
            <textarea
              id="message"
              rows="4"
              name="about"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              for="date"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.date")}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="find"
              className="block mb-2 text-lg font-bold text-white"
            >
              {t("contact.find")}
            </label>
            <input
              type="text"
              id="find"
              name="find"
              className="border border-gray-600 text-lg rounded-xl block w-full p-4 bg-gray-800 text-white focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full transition px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-xl"
          >
            {t("contact.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
