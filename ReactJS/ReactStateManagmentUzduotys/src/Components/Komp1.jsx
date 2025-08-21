import { useState } from "react";

const Komp1 = () => {
  const [pirmas, setPirmas] = useState("");
  const [antras, setantras] = useState("");
  const pirmasFn = (e) => {
    setPirmas(e.target.value);
  };
  const antrasFn = (e) => {
    setantras(e.target.value);
  };

  const tikrintiIlgi = () => {
    if (pirmas === antras) {
      return `zodziai abu vienodo ilgio`;
    } else if (pirmas > antras) {
      return `Antras begikas`;
    } else {
      return `Pirmas begikas`;
    }
  };

  return (
    <div>
      <h1>Komp1</h1>
      <h2>Begikai</h2>
      <label htmlFor="pirmas">Pirmas begiko laikas</label>
      <input id="pirmas" type="text" onInput={pirmasFn} />
      <br />
      <br />
      <label htmlFor="antras">Antras begiko laikas</label>
      <input id="antras" type="text" onInput={antrasFn} />

      <p>
        Isvesti Laikai: {pirmas} sekundės ir {antras} sekundės
      </p>
      <div>Greitesnis yra: {tikrintiIlgi()}</div>
    </div>
  );
};

export default Komp1;
