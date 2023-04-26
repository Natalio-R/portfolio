import React from "react";
import { Feature } from "../../hooks";
import { useTranslation } from "react-i18next";

const FeatureList = () => {
  const { t } = useTranslation("global");

  // Icons
  const icoHab01 = "fa-solid fa-gauge-high";
  const icoHab02 = "fa-solid fa-bolt";
  const icoHab03 = "fa-solid fa-leaf";
  const icoHab04 = "fa-solid fa-circle-check";
  const icoHab05 = "fa-brands fa-codepen";
  const icoHab06 = "fa-solid fa-infinity";

  return (
    <section id="features" className="bg-white">
      <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="w-full mb-8 lg:mb-16">
          <h3 className="mb-4 text-xl text-center font-bold uppercase text-orange-500">
            {t("abilities.subtitle")}
          </h3>
          <h2 className="text-center text-6xl font-extrabold text-gray-900">
            {t("abilities.title")}
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Feature
            featureIcon={icoHab01}
            featureTitle={t("abilities.hab-1-title")}
            featureDesc={
              t("abilities.hab-1-subtitle") +
              " " +
              t("abilities.hab-1-link") +
              "."
            }
          />
          <Feature
            featureIcon={icoHab02}
            featureTitle={t("abilities.hab-2-title")}
            featureDesc={t("abilities.hab-2-subtitle")}
          />
          <Feature
            featureIcon={icoHab03}
            featureTitle={t("abilities.hab-3-title")}
            featureDesc={t("abilities.hab-3-subtitle")}
          />
          <Feature
            featureIcon={icoHab04}
            featureTitle={t("abilities.hab-4-title")}
            featureDesc={t("abilities.hab-4-subtitle")}
          />
          <Feature
            featureIcon={icoHab05}
            featureTitle={t("abilities.hab-5-title")}
            featureDesc={t("abilities.hab-5-subtitle")}
          />
          <Feature
            featureIcon={icoHab06}
            featureTitle={t("abilities.hab-6-title")}
            featureDesc={t("abilities.hab-6-subtitle")}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
