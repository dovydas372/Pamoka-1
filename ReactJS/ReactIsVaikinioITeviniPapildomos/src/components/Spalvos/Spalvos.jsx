import { useState } from "react";
import SpalvuMygtukai from "./SpalvuMygtukai";

const Spalvos = () => {
  const [spalva, setSpalva] = useState("");
  const paimtiSpalva = (spalv) => {
    setSpalva(spalv);
    console.log(spalva);
  };
  return (
    <div>
      <h1>Spalvos</h1>
      <SpalvuMygtukai spalva={paimtiSpalva}></SpalvuMygtukai>
      <p>pasirinkta spalva yra: {spalva ? spalva : "splava nepasirinkta"}</p>
    </div>
  );
};

export default Spalvos;
