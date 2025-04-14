import { useState } from "react";

const Komp5 = () => {
  const [pasirinkimas, setPasirinkimas] = useState("------");
  const pasirinkimoHandler = (eventas) => {
    setPasirinkimas(eventas.target.innerText);
  };

  const tikrinti = () => {
    switch (pasirinkimas) {
      case "HTML":
        return `HTML - Tai dasdasdsad`;
      case "CSS":
        return `CSS - Tai sdadsdas`;
      case "JavaScript":
        return `JavaScript - tai asdasdasgdgsg`;
      case "React":
        return `React - tai biblioteka`;
      default:
        return "Nepatikrinta";
    }
  };
  return (
    <div>
      <h1>Komp5</h1>
      <h2>Pasirinkimai</h2>
      <p>Labiausiai patiko:</p>
      <button onClick={pasirinkimoHandler}>HTML</button>
      <button onClick={pasirinkimoHandler}>CSS</button>
      <button onClick={pasirinkimoHandler}>JavaScript</button>
      <button onClick={pasirinkimoHandler}>React</button>
      <p>Pasirinkote:{tikrinti()}</p>
    </div>
  );
};

export default Komp5;
