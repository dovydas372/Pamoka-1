import "./App.css";
import HomeLayout from "./components/HomeLayout";
import MainLayout from "./components/MainLayout";
import Home from "./assets/Pages/Home";
import Contacts from "./assets/Pages/Contacts";
import About from "./assets/Pages/About";
import Product from "./assets/Pages/Product";
import Products from "./assets/Pages/Products";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import Klaida from "./assets/Pages/Klaida";
import AdminLayout from "./components/AdminLayout";

const puslapiai = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contacts", element: <Contacts></Contacts> },
      { path: "/product/:indeksasID", element: <Product></Product> },
      { path: "/products", element: <Products></Products> },
      { path: "*", element: <Klaida></Klaida> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "", element: <Klaida></Klaida> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={puslapiai}></RouterProvider>
    </>
  );
}

export default App;
