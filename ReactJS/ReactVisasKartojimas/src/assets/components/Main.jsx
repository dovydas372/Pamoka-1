import React from "react";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import Home from "./Home";
import MainLayout from "./MainLayout";
import Content from "./Content";
import "./App.css";
import Isaugoti from "./Isaugoti";
const pages = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/content", element: <Content></Content> },
      { path: "/saved", element: <Isaugoti></Isaugoti> },
    ],
  },
]);

const Main = () => {
  return (
    <>
      <RouterProvider router={pages}></RouterProvider>
    </>
  );
};

export default Main;
