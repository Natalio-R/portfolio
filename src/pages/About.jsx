import React from "react";
import {} from "../hooks/index";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <div className="mx-auto max-w-screen-lg py-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-4 text-xl text-center font-bold uppercase text-orange-500">
          {t("about.subtitle")}
        </h3>
        <h2 className="text-center text-6xl font-extrabold text-gray-900">
          {t("about.title")}
        </h2>
      </div>
      <div className="flex flex-col mt-20 mx-8">
        <p className="text-lg font-normal mb-2">{t("about.paragraph-01")}</p>
        <p className="text-lg font-normal mt-2">{t("about.paragraph-02")}</p>
        <div className="bg-gray-800 my-10 py-8 px-10 shadow-xl rounded-xl">
          <p className="text-lg font-normal text-white">
            {t("about.paragraph-03")}
          </p>
        </div>
        <p className="text-lg font-normal">{t("about.paragraph-04")}</p>
        <hr className="h-px my-8 border-0 bg-gray-700" />
        <p className="text-lg font-normal mb-2">{t("about.paragraph-05")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-06")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-07")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-08")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-09")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-10")}</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h3 className="mb-4 text-xl text-center font-bold uppercase text-orange-500">
          {t("about.subtitle-2")}
        </h3>
        <h2 className="text-center text-6xl font-extrabold text-gray-900">
          {t("about.title-2")}
        </h2>
      </div>
      <div className="flex flex-col mt-20 mx-8">
        <p className="text-lg font-normal mb-2">{t("about.paragraph-11")}</p>
        <p className="text-lg font-normal mt-2">{t("about.paragraph-12")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-13")}</p>
        <p className="text-lg font-normal mb-2">{t("about.paragraph-14")}</p>
      </div>
    </div>
  );
};

export default About;
