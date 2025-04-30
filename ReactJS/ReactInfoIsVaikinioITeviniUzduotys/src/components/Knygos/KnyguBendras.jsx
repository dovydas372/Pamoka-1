import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
  const [knyga, setKnyga] = useState([]);

  const paimtiKnyga = (knygaInfo) => {
    setKnyga([knygaInfo, ...knyga]);
  };

  return (
    <div>
      <h1>KnyguBendras</h1>
      <KnygosIvedimas data={paimtiKnyga}></KnygosIvedimas>
      <KnyguSpausdinimas siustiKnyga={knyga}></KnyguSpausdinimas>
    </div>
  );
};

export default KnyguBendras;
