import { useState } from "react";

const Komp2 = () => {
  const [suolis, setSuolis] = useState(false);

  const tikrinti = (suolis) => {
    switch (suolis) {
      case false:
        return `Ne`;
      case true:
        return `Taip`;
      default:
        return "dar nesoko";
    }
  };

  const pakeisti = (eventas) => {
    let tikrinti = eventas.target.innerText;
    let parinkimai = [false, true];
    if (tikrinti === "Sokti") {
      setSuolis(parinkimai[Math.round(Math.random())]);
    } else {
      setSuolis(true);
    }
  };
  return (
    <div>
      <h1>Komp2</h1>
      <h2>Zuikis</h2>
      <button onClick={pakeisti}>Sokti</button>
      <button onClick={pakeisti}>Pasinaudoti bugu</button>
      <p>Ar persoko zuikis : {tikrinti(suolis)}</p>
    </div>
  );
};

export default Komp2;
