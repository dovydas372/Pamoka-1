import { useState } from "react";

const Komp2 = () => {
  const [pirmas, setPirmas] = useState("");
  const [antras, setantras] = useState("");
  const pirmasFn = (e) => {
    setPirmas(e.target.value);
  };
  const antrasFn = (e) => {
    setantras(e.target.value);
  };

  const tikrintiIlgi = () => {
    if (pirmas.length === antras.length) {
      return `zodziai abu vienodo ilgio`;
    } else if (pirmas.length > antras.length) {
      return `${pirmas}`;
    } else {
      return `${antras}`;
    }
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Ilgesnis zodis</h2>
      <label htmlFor="pirmas">Pirmas</label>
      <input id="pirmas" type="text" onInput={pirmasFn} />
      <br />
      <br />
      <label htmlFor="antras">Antras</label>
      <input id="antras" type="text" onInput={antrasFn} />

      <p>
        Isvesti zodziai: {pirmas} ir {antras}
      </p>
      <div>Ilgesnis zodis yra: {tikrintiIlgi()}</div>
    </div>
  );
};

export default Komp2;
