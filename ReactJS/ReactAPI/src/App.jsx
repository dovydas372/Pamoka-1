import { useState } from "react";

import "./App.css";
// @ts-ignore
import Api from "./components/Api";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/MainLayout";
import Pirmas from "./assets/pages/Pirmas";
import Antras from "./assets/pages/Antras";
import Trecias from "./assets/pages/Trecias";

const puslapiai = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Api></Api> },
      { path: "/Pirmas", element: <Pirmas></Pirmas> },
      { path: "/Antras", element: <Antras></Antras> },
      { path: "/Trecias", element: <Trecias></Trecias> },
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
