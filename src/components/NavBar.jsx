import React, { useState, useEffect } from "react";
import { Home, Instagram, GitHub, Linkedin, Sun, Moon } from "react-feather";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkModeCookie = getCookie("darkMode");
    return darkModeCookie === "true"; // Devuelve `true` si la cookie tiene el valor "true"
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    setCookie("darkMode", isDarkMode, 365);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="navbar__header">
      <a href="/" className="navbar__link home">
        <Home size={18} color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"} />
      </a>
      <span className="separate"></span>
      <a
        href="https://instagram.com/natalio_lp"
        className="navbar__link instagram"
      >
        <Instagram
          size={18}
          color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"}
        />
      </a>
      <a href="https://github.com/Natalio-R" className="navbar__link github">
        <GitHub
          size={18}
          color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"}
        />
      </a>
      <a
        href="https://linkedin.com/in/nataliorabasco"
        className="navbar__link linkedin"
      >
        <Linkedin
          size={18}
          color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"}
        />
      </a>
      <span className="separate"></span>
      <div onClick={handleDarkModeToggle} className="navbar__link theme">
        <div className="light">
          <Sun size={18} color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"} />
        </div>
        <div className="dark">
          <Moon
            size={18}
            color={isDarkMode ? "hsl(0 0% 98%)" : "hsl(0 0% 9)"}
          />
        </div>
      </div>
    </header>
  );
};

const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
};

export default NavBar;
