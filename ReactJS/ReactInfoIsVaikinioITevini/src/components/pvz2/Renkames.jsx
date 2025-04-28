import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
  const [kalba, setKalba] = useState("");
  const paimtaReiksme = (reiksme) => {
    setKalba(reiksme);
  };
  return (
    <div>
      <h1>Renkames</h1>
      <ProgramavimoKalba grazinamaReiksme={paimtaReiksme}></ProgramavimoKalba>
      {kalba.length > 0 && <p>Kalba: {kalba}</p>}
    </div>
  );
};

export default Renkames;
