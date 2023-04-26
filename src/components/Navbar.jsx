import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import spainFlag from "../assets/ES.svg";
import englandFlag from "../assets/GB.png";
import NatalioImg from "../assets/profile_v2.jpg";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  return (
    <>
      <nav className="p-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex flex-row items-center justify-center">
            <img
              src={NatalioImg}
              alt="Natalio Rabasco"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 border border-gray-400 shadow-xl"
            />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-xl sm:text-2xl font-extrabold whitespace-nowrap leading-none text-gray-800">
                Natalio Rabasco
              </h2>
              <p className="relative text-md text-gray-800 font-medium">
                <span className="absolute w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                <span className="animate-ping absolute w-3 h-3 bg-green-700 opacity-75 rounded-full mt-1.5 -ml-0.5"></span>
                &nbsp;&nbsp;&nbsp;{t("navbar.provision")}
              </p>
            </div>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="inline-flex mr-2" role="group">
              <button
                type="button"
                className="rounded-full h-6 w-6 mr-2 shadow-xl"
              >
                <img
                  src={spainFlag}
                  alt="Spain Flag"
                  className="h-6 rounded-full"
                  onClick={() => i18n.changeLanguage("es")}
                />
              </button>
              <button type="button" className="rounded-full h-6 w-6 shadow-xl">
                <img
                  src={englandFlag}
                  alt="England Flag"
                  className="h-6 rounded-full"
                  onClick={() => i18n.changeLanguage("en")}
                />
              </button>
            </div>
            <a
              href="/contact"
              className="transition ml-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-xl text-sm px-5 py-2.5 text-center shadow-xl"
            >
              {t("navbar.contact")}
              <i className="fa-solid fa-angle-right ml-2"></i>
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
              <li>
                <a
                  href="/"
                  className={
                    location.pathname === "/"
                      ? "transition block py-1 px-2 text-gray-900 font-bold rounded-lg bg-gray-200"
                      : "transition block py-1 px-2 text-gray-700 rounded-lg bg-transparent hover:bg-gray-200 hover:text-gray-900"
                  }
                  aria-current="page"
                >
                  {t("navbar.home")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={
                    location.pathname === "/about"
                      ? "transition block py-1 px-2 text-gray-900 font-bold rounded-lg bg-gray-200"
                      : "transition block py-1 px-2 text-gray-700 rounded-lg bg-transparent hover:bg-gray-200 hover:text-gray-900"
                  }
                >
                  {t("navbar.about")}
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className={
                    location.pathname === "/projects"
                      ? "transition block py-1 px-2 text-gray-900 font-bold rounded-lg bg-gray-200"
                      : "transition block py-1 px-2 text-gray-700 rounded-lg bg-transparent hover:bg-gray-200 hover:text-gray-900"
                  }
                >
                  {t("navbar.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className={
                    location.pathname === "#faqs"
                      ? "transition block py-1 px-2 text-gray-900 font-bold rounded-lg bg-gray-200"
                      : "transition block py-1 px-2 text-gray-700 rounded-lg bg-transparent hover:bg-gray-200 hover:text-gray-900"
                  }
                >
                  {t("navbar.faqs")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
