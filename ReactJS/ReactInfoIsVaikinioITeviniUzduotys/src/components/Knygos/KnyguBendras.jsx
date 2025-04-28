import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";

const KnyguBendras = () => {
  const [knyga, setKnyga] = useState([]);

  const paimtiKnyga = () => {};

  return (
    <div>
      <h1>KnyguBendras</h1>
      <KnygosIvedimas data={paimtiKnyga}></KnygosIvedimas>
    </div>
  );
};

export default KnyguBendras;
