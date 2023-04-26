import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Home, About, Contact } from "./hooks/index";

function Page() {
  return (
    <>
      <Router>
        <div
          style={{ zIndex: "-1", opacity: ".03" }}
          class="fixed w-screen h-screen bg-[url('https://uploads-ssl.webflow.com/62c435401c8f7261df7dac30/62c5acd6c07e3c25ed49ea71_624d5860b71355f93453ff75_grain.gif')] bg-repeat"
        ></div>
        <div
          style={{ zIndex: "-2", opacity: "1" }}
          class="fixed w-screen h-screen bg-[url('https://uploads-ssl.webflow.com/62c435401c8f7261df7dac30/62c44e50efe5bfb56fdc13a4_Andy-hooke-bg%20(1).jpg')] bg-cover bg-no-repeat"
        ></div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Page;
