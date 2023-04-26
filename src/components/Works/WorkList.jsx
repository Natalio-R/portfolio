import React from "react";
import { Work } from "../../hooks";
import { useTranslation } from "react-i18next";
import imgWork01 from "../../assets/work-01.png";
import imgWork02 from "../../assets/work-02.png";

const WorkList = () => {
  const { t } = useTranslation("global");

  return (
    <section id="works">
      <div className="px-8 py-16 xl:px-0 xl:py-20 mx-auto max-w-screen-xl sm:pt-16">
        <div className="flex flex-col items-center justify-center mb-8 lg:mb-16">
          <h3 className="mb-4 text-xl text-center font-bold uppercase text-orange-500">
            {t("work.subtitle")}
          </h3>
          <h2 className="text-center max-w-2xl text-6xl font-extrabold text-gray-900">
            {t("work.title")}
          </h2>
        </div>
        <Work
          workSubtitle={t("work.work-cat-02")}
          workTitle="Movil Europa"
          workDesc={t("work.work1-paragraph")}
          workImage={imgWork01}
          workLink="https://movileuropa.com/"
        />
        <Work
          workSubtitle={t("work.work-cat-01")}
          workTitle="MovilToGo"
          workDesc={t("work.work2-paragraph")}
          workImage={imgWork02}
          workLink="https://moviltogo.es/"
        />
      </div>
    </section>
  );
};

export default WorkList;
