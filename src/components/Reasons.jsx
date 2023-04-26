import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Reasons = () => {
  const [t] = useTranslation("global");
  const location = useLocation();
  const customDesign = useRef(null);
  const reliable = useRef(null);
  const quality = useRef(null);
  const myGuarantee = useRef(null);

  useEffect(() => {
    if (location.hash === "#custom-design") {
      customDesign.current.classList.remove("text-white");
      customDesign.current.classList.add("bg-white");
      customDesign.current.classList.add("text-gray-900");
    } else {
      customDesign.current.classList.add("text-white");
      customDesign.current.classList.remove("bg-white");
      customDesign.current.classList.remove("text-gray-900");
    }
    if (location.hash === "#reliable") {
      reliable.current.classList.remove("text-white");
      reliable.current.classList.add("bg-white");
      reliable.current.classList.add("text-gray-900");
    } else {
      reliable.current.classList.add("text-white");
      reliable.current.classList.remove("bg-white");
      reliable.current.classList.remove("text-gray-900");
    }

    if (location.hash === "#quality") {
      quality.current.classList.remove("text-white");
      quality.current.classList.add("bg-white");
      quality.current.classList.add("text-gray-900");
    } else {
      quality.current.classList.add("text-white");
      quality.current.classList.remove("bg-white");
      quality.current.classList.remove("text-gray-900");
    }

    if (location.hash === "#my-guarantee") {
      myGuarantee.current.classList.remove("text-white");
      myGuarantee.current.classList.add("bg-white");
      myGuarantee.current.classList.add("text-gray-900");
    } else {
      myGuarantee.current.classList.add("text-white");
      myGuarantee.current.classList.remove("bg-white");
      myGuarantee.current.classList.remove("text-gray-900");
    }
  }, [location.hash]);

  return (
    <>
      <div className="w-full bg-gray-900">
        <div className="relative px-8 py-16 xl:px-0 xl:py-20 mx-auto max-w-screen-xl">
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-xl font-extrabold uppercase text-orange-500">
              {t("reasons.subtitle")}
            </h3>
            <h2 className="text-5xl sm:text-6xl max-w-none md:max-w-4xl font-extrabold text-white">
              {t("reasons.title")}
            </h2>
            <div className="sticky top-8 md:top-12 mt-10 bg-gray-800 p-2 rounded-full flex items-center justify-start shadow-xl z-10">
              <a
                href="#custom-design"
                className="rounded-full py-1.5 px-4 text-md md:text-xl font-normal cursor-pointer"
                ref={customDesign}
              >
                {t("reasons.list-1")}
              </a>
              <a
                href="#reliable"
                className="rounded-full py-1.5 px-6 text-md md:text-xl font-normal cursor-pointer"
                ref={reliable}
              >
                {t("reasons.list-2")}
              </a>
              <a
                href="#quality"
                className="rounded-full py-1.5 px-6 text-md md:text-xl font-normal cursor-pointer"
                ref={quality}
              >
                {t("reasons.list-3")}
              </a>
              <a
                href="#my-guarantee"
                className="rounded-full py-1.5 px-6 text-md md:text-xl font-normal cursor-pointer"
                ref={myGuarantee}
              >
                {t("reasons.list-4")}
              </a>
            </div>
            <div className="flex flex-col">
              <article
                className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between"
                id="custom-design"
              >
                <div className="py-0 lg:py-8 flex flex-col items-start justify-center">
                  <h3 className="text-xl font-bold uppercase text-orange-500">
                    {t("reasons.list-1")}
                  </h3>
                  <h2 className="text-5xl sm:text-6xl text-white font-extrabold mt-4 mb-8">
                    {t("reasons.rea-title-1")}
                  </h2>
                  <p className="text-xl text-gray-400 font-normal">
                    {t("reasons.rea-info-1")}
                  </p>
                </div>
                <div className="py-10 lg:py-20 flex items-center justify-center lg:pl-44">
                  <div className="flex flex-col shadow-xl rotate-6">
                    <div className="w-full bg-gray-800 flex items-center justify-start rounded-t-xl p-3">
                      <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-800"></div>
                    </div>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dfc9a6167716279.642da14ebbcfb.png"
                      alt="Projects 1"
                      className="rounded-b-xl"
                    />
                  </div>
                </div>
              </article>
              <article
                className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between"
                id="reliable"
              >
                <div className="py-0 lg:py-8 flex flex-col items-start justify-center">
                  <h3 className="text-xl font-bold uppercase text-orange-500">
                    {t("reasons.list-2")}
                  </h3>
                  <h2 className="text-5xl sm:text-6xl text-white font-extrabold mt-4 mb-8">
                    {t("reasons.rea-title-2")}
                  </h2>
                  <p className="text-xl text-gray-400 font-normal">
                    {t("reasons.rea-info-2")}
                  </p>
                </div>
                <div className="py-10 lg:py-20 flex items-center justify-center lg:pl-44">
                  <div className="flex flex-col shadow-xl -rotate-6">
                    <div className="w-full bg-gray-800 flex items-center justify-start rounded-t-xl p-3">
                      <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-800"></div>
                    </div>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2e2699163460545.63e60e380e65a.png"
                      alt="Projects 2"
                      className="rounded-b-xl"
                    />
                  </div>
                </div>
              </article>
              <article
                className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between"
                id="quality"
              >
                <div className="py-0 lg:py-8 flex flex-col items-start justify-center">
                  <h3 className="text-xl font-bold uppercase text-orange-500">
                    {t("reasons.list-3")}
                  </h3>
                  <h2 className="text-5xl sm:text-6xl text-white font-extrabold mt-4 mb-8">
                    {t("reasons.rea-title-3")}
                  </h2>
                  <p className="text-xl text-gray-400 font-normal">
                    {t("reasons.rea-info-3")}
                  </p>
                </div>
                <div className="py-10 lg:py-20 flex items-center justify-center lg:pl-44">
                  <div className="flex flex-col shadow-xl rotate-6">
                    <div className="w-full bg-gray-800 flex items-center justify-start rounded-t-xl p-3">
                      <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-800"></div>
                    </div>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/065eaf166141745.64131688c7983.png"
                      alt="Projects 3"
                      className="rounded-b-xl"
                    />
                  </div>
                </div>
              </article>
              <article
                className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between"
                id="my-guarantee"
              >
                <div className="py-0 lg:py-8 flex flex-col items-start justify-center">
                  <h3 className="text-xl font-bold uppercase text-orange-500">
                    {t("reasons.list-4")}
                  </h3>
                  <h2 className="text-5xl sm:text-6xl text-white font-extrabold mt-4 mb-8">
                    {t("reasons.rea-title-4")}
                  </h2>
                  <p className="text-xl text-gray-400 font-normal">
                    {t("reasons.rea-info-4")}
                  </p>
                  <a
                    href="/contact"
                    className="transition mt-6 px-8 py-6 bg-white rounded-xl shadow-xl text-gray-900 font-semibold text-xl hover:rotate-6"
                  >
                    {t("header.btn-contact")}
                    <i className="fa-solid fa-arrow-down ml-2"></i>
                  </a>
                </div>
                <div className="py-10 lg:py-20 flex items-center justify-center lg:pl-44">
                  <div className="flex flex-col shadow-xl -rotate-6">
                    <div className="w-full bg-gray-800 flex items-center justify-start rounded-t-xl p-3">
                      <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-800"></div>
                    </div>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/43ae67167296589.6426696289119.jpg"
                      alt="Projects 4"
                      className="rounded-b-xl"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reasons;
