import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pirmas from "./components/Pirmas";
import Antras from "./components/Antras";
import Trecias from "./components/Trecias";
import Ketvirta from "./components/Ketvirta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pirmas></Pirmas>
      <Antras></Antras>
      <Trecias></Trecias>
      <Ketvirta></Ketvirta>
    </>
  );
}

export default App;
