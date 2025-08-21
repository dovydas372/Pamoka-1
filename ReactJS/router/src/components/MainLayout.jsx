import { NavLink, Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      <div style={{ height: "100px", backgroundColor: "red" }}>
        <NavLink to={"/"}>Pagrindinis puslapis</NavLink>
        <NavLink to={"/about"}>Apie puslapis</NavLink>
        <NavLink to={"/contacts"}>Apie puslapis</NavLink>
        <NavLink to={"/products"}>produktai</NavLink>
        header
      </div>
      <br />
      <Outlet></Outlet>

      <br />
      <div style={{ height: "100px", backgroundColor: "red" }}>footer</div>
    </>
  );
};

export default MainLayout;
