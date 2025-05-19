// @ts-ignore
import { NavLink, Outlet } from "react-router";
const MainLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
