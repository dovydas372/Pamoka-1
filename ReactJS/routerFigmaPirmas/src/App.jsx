import "./App.css";
import AboutUs from "./assets/pages/AboutUs";
import Bookings from "./assets/pages/Bookings";
import Contacts from "./assets/pages/Contacts";
import Home from "./assets/pages/Home";
import What from "./assets/pages/What";
import MainLayout from "./components/MainLayout";

// @ts-ignore
import { createBrowserRouter, RouterProvider } from "react-router";

const puslapiai = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/aboutus", element: <AboutUs></AboutUs> },
      { path: "/bookings", element: <Bookings></Bookings> },
      { path: "/whattodo", element: <What></What> },
      { path: "/contacts", element: <Contacts></Contacts> },
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
