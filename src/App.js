import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./pages/Footer";
import SiteReact from "./pages/SiteReact";
import SiteHtmlCss from "./pages/SiteHtmlCss";
import SiteWordPress from "./pages/SiteWordPress";
import Contact from "./pages/Contact";

const App = () => {
  // animation aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </>
  );
};

export default App;
