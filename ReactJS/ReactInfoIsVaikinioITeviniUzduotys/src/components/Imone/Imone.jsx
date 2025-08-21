import { useState } from "react";
import Darbuotojas from "./Darbuotojas";
import IsvestiInfo from "./IsvestiInfo";

const Imone = () => {
  const [darbuotojas, setDarbuotojas] = useState([]);

  const gautiInfo = (darbuotojoInfo) => {
    setDarbuotojas([darbuotojoInfo, ...darbuotojas]);
  };

  return (
    <div>
      <h1>Imone</h1>
      <Darbuotojas info={gautiInfo}></Darbuotojas>
      <IsvestiInfo siustaInfo={darbuotojas}></IsvestiInfo>
    </div>
  );
};

export default Imone;
