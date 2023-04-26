import React from "react";
import { Process } from "../../hooks";
import { useTranslation } from "react-i18next";

const ProcessList = () => {
  const { t } = useTranslation("global");

  return (
    <div className="w-full bg-gray-900">
      <div className="px-8 md:px-0 py-16 md:py-20 flex flex-col md:flex-row mx-auto max-w-screen-xl">
        <div className="md:w-2/4 md:sticky top-12 flex flex-col items-start mb-10 md:mb-0">
          <h3 className="mb-4 text-xl font-extrabold uppercase text-orange-500">
            {t("process.subtitle")}
          </h3>
          <h2 className="text-5xl md:text-6xl md:max-w-4xl font-extrabold text-white">
            {t("process.title")}
          </h2>
          <a
            href="/contact"
            className="transition mt-10 px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-xl hover:-rotate-6"
          >
            {t("process.button")}
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="md:w-2/4 grid grid-rows-5 gap-y-12">
          <Process
            proId="01"
            proTitle={t("process.pro-1-title")}
            proDesc={t("process.pro-1-description")}
            proRotate="rotate-2"
          />
          <Process
            proId="02"
            proTitle={t("process.pro-2-title")}
            proDesc={t("process.pro-2-description")}
            proRotate="-rotate-2"
          />
          <Process
            proId="03"
            proTitle={t("process.pro-3-title")}
            proDesc={t("process.pro-3-description")}
            proRotate="rotate-2"
          />
          <Process
            proId="04"
            proTitle={t("process.pro-4-title")}
            proDesc={t("process.pro-4-description")}
            proRotate="-rotate-2"
          />
          <Process
            proId="05"
            proTitle={t("process.pro-5-title")}
            proDesc={t("process.pro-5-description")}
            proRotate="rotate-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessList;
