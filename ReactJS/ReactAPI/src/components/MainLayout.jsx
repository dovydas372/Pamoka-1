import React from "react";
import { Outlet, NavLink } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="header">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home API
        </NavLink>

        <NavLink
          to="/Pirmas"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Pirmas
        </NavLink>

        <NavLink
          to="/Antras"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Antras
        </NavLink>

        <NavLink
          to="/Trecias"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Trecias
        </NavLink>
      </div>
      <Outlet></Outlet>
      <div></div>
    </>
  );
};

export default MainLayout;
