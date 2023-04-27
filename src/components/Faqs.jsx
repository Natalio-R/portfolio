import React from "react";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white" id="faqs">
      <div className="py-20 mx-10 md:mx-auto max-w-screen-md">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-2 md:mb-4 text-xl text-center font-bold uppercase text-orange-500">
            {t("faqs.subtitle")}
          </h3>
          <h2 className="text-center max-w-2xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            {t("faqs.title")}
          </h2>
        </div>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-gray-900"
          data-inactive-classes="text-gray-500"
          className="mt-16"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 text-lg md:text-xl font-bold text-left text-gray-900 border-y border-gray-900"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>{t("faqs.faq-1-question")}</span>
              <svg
                data-accordion-icon
                className="transition w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-900 text-lg md:text-xl">
              <p className="text-gray-500">{t("faqs.faq-1-answer")}</p>
              <p className="text-gray-500">{t("faqs.faq-1-answer-2")}</p>
              <p className="text-gray-500">{t("faqs.faq-1-answer-3")}</p>
              <p className="text-gray-500">{t("faqs.faq-1-answer-4")}</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 text-lg md:text-xl font-bold text-left text-gray-900 border-b border-gray-900"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="true"
              aria-controls="accordion-flush-body-2"
            >
              <span>{t("faqs.faq-2-question")}</span>
              <svg
                data-accordion-icon
                className="transition w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-900 text-lg md:text-xl">
              <p className="text-gray-500">{t("faqs.faq-2-answer")}</p>
              <p className="my-4 text-gray-500">{t("faqs.faq-2-answer-2")}</p>
              <p className="text-gray-500">{t("faqs.faq-2-answer-3")}</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 text-lg md:text-xl font-bold text-left text-gray-900 border-b border-gray-900"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="true"
              aria-controls="accordion-flush-body-3"
            >
              <span>{t("faqs.faq-3-question")}</span>
              <svg
                data-accordion-icon
                className="transition w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-900 text-lg md:text-xl">
              <p className="text-gray-500">{t("faqs.faq-3-answer")}</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 text-lg md:text-xl font-bold text-left text-gray-900 border-b border-gray-900"
              data-accordion-target="#accordion-flush-body-4"
              aria-expanded="true"
              aria-controls="accordion-flush-body-4"
            >
              <span>{t("faqs.faq-4-question")}</span>
              <svg
                data-accordion-icon
                className="transition w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-4"
            className="hidden"
            aria-labelledby="accordion-flush-heading-4"
          >
            <div className="py-5 border-b border-gray-900 text-lg md:text-xl">
              <p className="text-gray-500">{t("faqs.faq-4-answer")}</p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 text-lg md:text-xl font-bold text-left text-gray-900 border-b border-gray-900"
              data-accordion-target="#accordion-flush-body-5"
              aria-expanded="true"
              aria-controls="accordion-flush-body-5"
            >
              <span>{t("faqs.faq-5-question")}</span>
              <svg
                data-accordion-icon
                className="transition w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-5"
            className="hidden"
            aria-labelledby="accordion-flush-heading-5"
          >
            <div className="py-5 border-b border-gray-900 text-lg md:text-xl">
              <p className="text-gray-500">{t("faqs.faq-5-answer")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
