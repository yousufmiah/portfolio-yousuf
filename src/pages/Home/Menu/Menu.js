import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import "./Menu.css";

const Menu = () => {
  return (
    <div className="mt-5">
      <div className="d-flex text-center font-bold">
        <div className="text-center my-20">
          <h1 className="text-xl md:text-6xl text-primary font-bold">
            My Projects
          </h1>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold sm:mx-1 md:mx-5"
              : "link text-white-500 btn btn-primary text-lg sm:mx-1 md:mx-5 no-underline"
          }
          to="/"
        >
          React Sites
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold  sm:mx-1 md:mx-5"
              : "link text-white-500 btn btn-primary text-lg  sm:mx-1 md:mx-5 no-underline"
          }
          to="html"
        >
          HTML, CSS Sites
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold  sm:mx-1 md:mx-5"
              : "link text-white-500 btn btn-primary text-lg sm:mx-1 md:mx-5 no-underline "
          }
          to="wordpress"
        >
          WordPress Sites
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold sm:mx-1 md:mx-5"
              : "link text-white-500 btn btn-primary text-lg sm:mx-1 md:mx-5 no-underline "
          }
          to="allsites"
        >
          All Sites
        </NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Menu;
