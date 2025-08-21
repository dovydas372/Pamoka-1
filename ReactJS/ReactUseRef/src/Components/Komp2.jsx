import { useState, useRef } from "react";

const Komp2 = () => {
  const [pirmas, setPirmas] = useState("");
  const [antras, setAntras] = useState("");

  const pirmasZodisRef = useRef();
  const antrasZodisRef = useRef();

  const ivesti = () => {
    console.log({
      pirmasZodis: pirmasZodisRef.current.value,
      antrasZodis: antrasZodisRef.current.value,
    });

    setPirmas(pirmasZodisRef.current.value);
    setAntras(antrasZodisRef.current.value);
  };

  const daugiauAraidziu = () => {
    const pirmasZodisARaides = pirmas
      .split("")
      .filter((raide) => raide.toLocaleLowerCase() === "a").length;
    const antrasZodisARaides = antras
      .split("")
      .filter((raide) => raide.toLocaleLowerCase() === "a").length;

    if (pirmasZodisARaides > antrasZodisARaides) {
      return `Pirmas zodis turi daugiausiai A raidziu`;
    } else {
      return `Antras zodis turi daugiausiai A raidziu arba lygu`;
    }
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Tikrinti zodzius</h2>
      <label htmlFor="pirmasZodis">Pirmas zodis:</label>
      <input type="text" ref={pirmasZodisRef} />
      <br />
      <br />
      <label htmlFor="antrasZodis">Antras zodis:</label>
      <input type="text" ref={antrasZodisRef} />
      <br />
      <br />
      <button onClick={ivesti}>Ivesti</button>
      <br />
      <br />

      <p>{daugiauAraidziu()}</p>
      <p>
        {pirmas} ir {antras}
      </p>
    </div>
  );
};

export default Komp2;
