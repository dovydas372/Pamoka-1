import { useState } from "react";

import "./App.css";
import Komp1 from "./component/Komp1";
import Komp2 from "./component/Komp2";
import Komp3 from "./component/Komp3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Komp1></Komp1>
      <Komp2></Komp2>
      <Komp3></Komp3>
    </>
  );
}

export default App;
