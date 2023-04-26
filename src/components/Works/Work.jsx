import React from "react";
import { useTranslation } from "react-i18next";

const Work = (props) => {
  const { t } = useTranslation("global");

  return (
    <article
      id={props.workId}
      className="rounded-xl shadow-xl w-full flex flex-col md:flex-row mt-14"
    >
      <div className="md:w-2/4 px-10 py-10 md:py-0 md:px-14 text-justify rounded-t-xl md:rounded-l-xl bg-white flex flex-col items-start justify-center">
        <h3 className="mb-4 text-lg font-bold uppercase text-orange-500">
          {props.workSubtitle}
        </h3>
        <h2 className="text-5xl font-extrabold text-gray-900">
          {props.workTitle}
        </h2>
        <p className="mt-6 text-xl font-normal text-gray-700">
          {props.workDesc}
        </p>
        <a
          href={props.workLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transition mt-8 mr-4 px-8 py-6 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl shadow-xl text-white font-semibold text-xl hover:-rotate-6"
        >
          {t("work.button")}
          <i className="fa-solid fa-arrow-right -rotate-45 ml-2"></i>
        </a>
      </div>
      <div className="md:w-2/4 rounded-b-xl md:rounded-r-xl">
        <img
          src={props.workImage}
          alt="Work"
          className="rounded-b-xl md:rounded-r-xl"
        />
      </div>
    </article>
  );
};

export default Work;
