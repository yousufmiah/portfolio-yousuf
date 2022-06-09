import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import SiteHtmlCss from "../SiteHtmlCss";
import SiteReact from "../SiteReact";
import SiteWordPress from "../SiteWordPress";
import Landing from "./Landing";
import Menu from "./Menu/Menu";

const Home = () => {
  return (
    <div>
      <Landing />
      <Menu></Menu>
      <Routes>
        <Route index element={<SiteReact />} />
        <Route path="html" element={<SiteHtmlCss />} />
        <Route path="wordpress" element={<SiteWordPress />} />
      </Routes>

      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
