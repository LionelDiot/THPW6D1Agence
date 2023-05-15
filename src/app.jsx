import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import About from "./About/index";
import Works from "./Works/index";
import Home from "./Home/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./mynavbar";
import CaseStudies from "./Works/studycase";
import './styles.css';
import useSystemTheme from "./useSystemTheme";

export default function App() {
  const [darkMode, setDarkMode] = useState(useSystemTheme());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <BrowserRouter>
      <MyNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<CaseStudies />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
