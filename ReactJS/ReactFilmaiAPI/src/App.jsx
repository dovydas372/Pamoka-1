import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Topfilmai from "./assets/components/Topfilmai";
import MainLayout from "./assets/components/MainLayout";
import Home from "./assets/components/Home";
import PaieskaPav from "./assets/components/PaieskaPav";
import PaieskaZanras from "./assets/components/PaieskaZanras";
import IssaugotiFilmai from "./assets/components/IssaugotiFilmai";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/topfilmai", element: <Topfilmai></Topfilmai> },
      { path: "/paieskapavadinimas", element: <PaieskaPav></PaieskaPav> },
      { path: "/paieskazanras", element: <PaieskaZanras></PaieskaZanras> },
      { path: "/issaugoti", element: <IssaugotiFilmai></IssaugotiFilmai> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={pages}></RouterProvider>
    </>
  );
}

export default App;
