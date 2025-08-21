import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Komp1 from "./components/Komp1";
import Komp2 from "./components/Komp2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Komp1></Komp1>
      <Komp2></Komp2>
    </>
  );
}

export default App;
