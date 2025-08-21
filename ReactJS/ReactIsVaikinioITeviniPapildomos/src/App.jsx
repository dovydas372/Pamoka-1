import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spalvos from "./components/Spalvos/Spalvos";
import TemperaturosRodiklis from "./components/Temperaturos/TemperaturosRodiklis";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Spalvos></Spalvos>
      <TemperaturosRodiklis></TemperaturosRodiklis>
    </>
  );
}

export default App;
