import React, { createContext, useEffect, useState } from "react";
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
import Blogs from "./pages/Blogs";
import SingleDetails from "./pages/SingleDetails";
import AllSites from "./pages/AllSites";

export const ItemsContext = createContext();

const App = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  // animation aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ItemsContext.Provider value={[items[0], setItems]}>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<SiteReact />} />
              <Route path="html" element={<SiteHtmlCss />} />
              <Route path="wordpress" element={<SiteWordPress />} />
              <Route path="allsites" element={<AllSites />} />
            </Route>

            <Route
              path="/singleDetails"
              element={<SingleDetails></SingleDetails>}
            ></Route>

            {/* <Route path="/singleDetails" element={<SingleDetails />} /> */}
            {/* <Route path="/projects" element={<Projects />}>
              <Route index element={<SiteReact />} />
              <Route path="html" element={<SiteHtmlCss />} />
              <Route path="wordpress" element={<SiteWordPress />} />
              <Route path="allsites" element={<AllSites />} />
            </Route> */}

            <Route path="/about" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer></Footer>
        </Navbar>
      </ItemsContext.Provider>
    </>
  );
};

export default App;
