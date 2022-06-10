import React from "react";
// import { Route, Routes } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
// import SiteHtmlCss from "../SiteHtmlCss";
// import SiteReact from "../SiteReact";
// import SiteWordPress from "../SiteWordPress";
import Landing from "./Landing";
// import Menu from "./Menu/Menu";

const Home = () => {
  return (
    <div>
      <Landing />
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
