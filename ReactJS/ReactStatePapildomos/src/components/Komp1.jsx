import { useState } from "react";

const Komp1 = () => {
  const [vardas, setVardas] = useState("-----");
  const pakeisVarda = (e) => {
    setVardas(e.target.value);
  };

  const trinti = () => {
    setVardas("");
  };

  return (
    <div>
      <h1>Komp1</h1>
      <h2>Vardo Ivedimas</h2>
      <input id="inputas" onInput={pakeisVarda} type="text" />
      <p>Sveikas! {vardas}</p>
      <button onClick={trinti}>Istrinti vardą</button>
    </div>
  );
};

export default Komp1;
