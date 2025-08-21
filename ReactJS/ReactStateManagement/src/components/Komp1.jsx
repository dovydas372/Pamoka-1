import { useState } from "react";

const Komp1 = () => {
  const [zodis, setZodis] = useState("");
  const zodisFn = (e) => {
    setZodis(e.target.value);
  };
  return (
    <div>
      <h1>Komp1</h1>
      <h2>Zodzio ilgis</h2>
      <label htmlFor="zodis">zodis</label>
      <input id="zodis" type="text" onInput={zodisFn} />
      <p>Isvestas tekstas: {zodis}</p>
      <p>Simbloiu kiekis {zodis.length}</p>
    </div>
  );
};

export default Komp1;
