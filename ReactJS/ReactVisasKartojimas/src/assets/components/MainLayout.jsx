import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="header">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Pagrindinis puslapis
        </NavLink>
        <NavLink
          to="/content"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Filmai
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Isaugoti
        </NavLink>
      </header>
      <br />

      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
