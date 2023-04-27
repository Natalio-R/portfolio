import React from "react";
import imageNR from "../assets/profile_v4.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t] = useTranslation("global");

  return (
    <div className="px-6 md:px-0 pb-16">
      <div
        id="header"
        className="flex flex-col items-center mx-auto max-w-screen-xl"
      >
        <img
          src={imageNR}
          alt="Natalio Rabasco"
          className="w-48 rounded-full mb-4 select-none"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-center text-gray-900">
          {t("header.subtitle")} 👋
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-2xl font-extrabold text-center my-4 md:my-6 text-gray-900">
          {t("header.title")}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-none md:max-w-xl lg:max-w-2xl xl:max-w-3xl font-light text-center mb-8 text-gray-900">
          {t("header.paragraph")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          <a
            href="/contact"
            className="transition mr-4 px-8 py-6 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl shadow-xl text-white font-semibold text-xl hover:-rotate-6"
          >
            {t("header.btn-contact")}
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
          <a
            href="#works"
            className="transition mr-4 px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-xl hover:rotate-6"
          >
            {t("header.btn-learnmore")}
            <i className="fa-solid fa-arrow-down ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
