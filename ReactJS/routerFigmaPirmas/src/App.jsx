import "./App.css";
import Home from "./assets/pages/Home";
import MainLayout from "./components/MainLayout";

// @ts-ignore
import { createBrowserRouter, RouterProvider } from "react";

const puslapiai = createBrowserRouter({
  path: "/",
  element: <MainLayout></MainLayout>,
  children: [{ index: true, element: <Home></Home> }],
});

function App() {
  return (
    <>
      <RouterProvider router={puslapiai}></RouterProvider>
    </>
  );
}

export default App;
