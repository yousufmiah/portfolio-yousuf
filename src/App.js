import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // animation aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Navbar>
  );
};

export default App;
