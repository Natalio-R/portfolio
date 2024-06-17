import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { Navbar, Footer, About, Contact } from "./hooks/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
