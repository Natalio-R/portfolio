import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("global");

  return (
    <div className="shadow-xl rounded-xl bg-gray-900 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-screen-xl mx-8 md:mx-auto my-20 p-10 md:p-16">
      <div className="flex flex-col items-center md:items-start justify-center">
        <h2 className="text-6xl text-white font-black mb-6 text-center md:text-left">
          {t("banner.title")}
        </h2>
        <h2 className="text-xl max-w-3xl text-gray-300 font-normal text-center md:text-left mb-6 md:mb-0">
          {t("banner.subtitle")}
        </h2>
      </div>
      <a
        href="/contact"
        className="transition px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-xl hover:rotate-6"
      >
        {t("banner.button")}
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
};

export default Banner;
