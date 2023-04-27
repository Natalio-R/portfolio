import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("global");

  return (
    <div className="shadow-xl rounded-xl bg-gray-900 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-screen-xl mx-8 lg:mx-auto mt-10 lg:mt-20 mb-20 p-10 lg:p-16">
      <div className="flex flex-col items-center md:items-start justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-black mb-6 text-center lg:text-left">
          {t("banner.title")}
        </h2>
        <h2 className="text-lg md:text-xl max-w-3xl text-gray-300 font-normal text-center lg:text-left mb-6 lg:mb-0">
          {t("banner.subtitle")}
        </h2>
      </div>
      <a
        href="/contact"
        className="transition px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-lg lg:text-xl hover:rotate-6"
      >
        {t("banner.button")}
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
};

export default Banner;
