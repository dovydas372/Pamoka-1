import { useState } from "react";

const Komp2 = () => {
  const [psIlgis, setPsIlgis] = useState(0);

  const kaiPaspausEnter = (e) => {
    if (e.keyCode == 13) {
      alert(`slaptazodis priimtas`);
    }
  };

  const skaiciavimas = () => {
    setPsIlgis(psIlgis + 1);
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Slaptazodis</h2>
      <input
        onInput={skaiciavimas}
        onKeyDown={kaiPaspausEnter}
        type="password"
      />
      <p>slaptazodzio ilgis {psIlgis}</p>
    </div>
  );
};

export default Komp2;
