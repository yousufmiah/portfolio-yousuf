import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import "./Menu.css";

const Menu = () => {
  return (
    <div className="mt-5">
      <div className="d-flex text-center font-bold">
        <div>
          <h2 className="mt-20 mb-8 text-4xl">Project are available here</h2>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold mx-5"
              : "link text-white-500 btn btn-primary text-lg mx-5 no-underline"
          }
          to="/"
        >
          React Sites
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold  mx-5"
              : "link text-white-500 btn btn-primary text-lg  mx-5 no-underline"
          }
          to="HTML"
        >
          HTML, CSS Sites
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "active-link text-white-500 btn btn-secondary text-lg font-bold  mx-5"
              : "link text-white-500 btn btn-primary text-lg mx-5 no-underline "
          }
          to="Wordpress"
        >
          WordPress Sites
        </NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Menu;
