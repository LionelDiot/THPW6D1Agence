import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import About from "./About/index";
import Contact from "./Contact/index";
import Works from "./Works/index";
import Home from "./Home/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./mynavbar";
import ConcretCases from"./Works/ConcretCases/index";
import Exercices from"./Works/Exercices/index";
import CaseStudies from"./Works/CaseStudies/index";
export default function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/exercices" element={<Exercices />} />
          <Route path="/works/casestudies" element={<CaseStudies />} />
          <Route path="/works/concretcases" element={<ConcretCases />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
