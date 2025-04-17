import { useState, useRef } from "react";

const Komp3 = () => {
  const [pazymiai, setPazymiai] = useState([0]);

  const pirmaRef = useRef();
  const antraRef = useRef();

  //   const ivesti = () => {
  //     console.log({
  //       pirmasZodis: pirmasZodisRef.current.value,
  //       antrasZodis: antrasZodisRef.current.value,
  //     });

  //     setPirmas(pirmasZodisRef.current.value);
  //     setAntras(antrasZodisRef.current.value);
  //   };

  //   const daugiauAraidziu = () => {
  //     const pirmasZodisARaides = pirmas
  //       .split("")
  //       .filter((raide) => raide.toLocaleLowerCase() === "a").length;
  //     const antrasZodisARaides = antras
  //       .split("")
  //       .filter((raide) => raide.toLocaleLowerCase() === "a").length;

  //     if (pirmasZodisARaides > antrasZodisARaides) {
  //       return `Pirmas zodis turi daugiausiai A raidziu`;
  //     } else {
  //       return `Antras zodis turi daugiausiai A raidziu arba lygu`;
  //     }
  //   };

  const submitFn = (event) => {
    event.preventDefault();
    const pazymys = parseInt(pirmaRef.current.value);
    setPazymiai([...pazymiai, pazymys]);
    console.log(pazymiai);
  };

  const vidurkis = () => {
    const suma = pazymiai.reduce((a, pazymys) => a + pazymys);
    console.log(suma);
    const vidurkis = suma / pazymiai.length;
    return vidurkis.toFixed(2);
  };

  return (
    <div>
      <h1>Komp3</h1>
      <h2>Tikrinti zodzius us forma</h2>
      <form onSubmit={submitFn}>
        <label htmlFor="pirma">skaiciai</label>
        <br />
        <input type="number" ref={pirmaRef} />
        <br />
        <br />
        <br />
        <button>Ivesti</button>
      </form>
      <br />
      <p>ivesti pazymiai : {pazymiai.join(", ")}</p>

      <p>vidurkis: {vidurkis()}</p>
    </div>
  );
};

export default Komp3;
