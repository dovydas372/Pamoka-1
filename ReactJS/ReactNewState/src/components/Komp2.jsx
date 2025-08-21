import { useState } from "react";

const Komp2 = () => {
  let zodziai = ["as", "jis", "ji", "molis", "kirvis", "einsteinas", "real"];
  const [zodis, naujasZodis] = useState("pradinis");

  const traukti = () => {
    const indeksas = Math.floor(Math.random() * zodziai.length);
    naujasZodis(zodziai[indeksas]);
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Atsitiktinis zodis</h2>
      <button onClick={traukti}>atsitiktinis</button>

      <p>Istrauktas zodis {zodis}</p>
    </div>
  );
};

export default Komp2;
