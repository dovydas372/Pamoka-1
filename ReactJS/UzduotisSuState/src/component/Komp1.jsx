import { useState } from "react";

const Komp1 = () => {
  const [zodis, setZodis] = useState("----");

  const pakeisti = (eventas) => {
    setZodis(eventas.target.innerText);
  };
  return (
    <div>
      <h1>Komp1</h1>
      <h2>Zodis</h2>
      <button onClick={pakeisti}>Pomidoras</button>
      <button onClick={pakeisti}>Agurkas</button>
      <p>zodis yra : {zodis}</p>
    </div>
  );
};

export default Komp1;
