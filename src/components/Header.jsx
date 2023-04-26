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
        <h2 className="md:text-3xl text-2xl font-normal text-center text-black">
          {t("header.subtitle")} 👋
        </h2>
        <h1 className="md:text-6xl text-5xl max-w-2xl font-extrabold text-center my-6 text-black">
          {t("header.title")}
        </h1>
        <p className="md:text-3xl text-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl font-light text-center mb-8 text-black">
          {t("header.paragraph")}
        </p>
        <div className="flex items-center justify-center">
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
