import { NavLink, Outlet } from "react-router";

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
          Visi Filmai
        </NavLink>
        <NavLink
          to="/topfilmai"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Top 10 Filmai
        </NavLink>
        <NavLink
          to="/paieskapavadinimas"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Paieška pagal pavadinimą
        </NavLink>
        <NavLink
          to="/paieskazanras"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Paieška pagal žanrą
        </NavLink>

        <NavLink
          to="/issaugoti"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Isaugoti Filmai
        </NavLink>
      </div>
      <br />
      <div className="main-content">
        <Outlet></Outlet>
      </div>

      <br />
      <div className="footer">Čia gali būti jūsų reklama</div>
    </>
  );
};

export default MainLayout;
