import React from "react";
import Naujiena from "./Naujiena";

const Kategorijas = () => {
  const naujienos = [
    {
      pavadinimas: "Dirbtinis intelektas keičia pasaulį",
      perziuros: 1200,
      tekstas:
        "Naujausios AI technologijos jau taikomos kasdienybėje – nuo medicinos iki švietimo.",
    },
    {
      pavadinimas: "Ekonomikos augimas 2025",
      perziuros: 850,
      tekstas:
        "Analitikai prognozuoja stabilų augimą ir naujas galimybes verslui artimiausiais metais.",
    },
    {
      pavadinimas: "Sporto naujienos: finalas artėja",
      perziuros: 670,
      tekstas:
        "Lietuvos krepšinio rinktinė ruošiasi svarbiausioms metų rungtynėms.",
    },
  ];

  return (
    <div>
      <h1>Kategorijas</h1>
      {naujienos.map((nauj, i) => (
        <Naujiena key={i} naujiena={nauj}></Naujiena>
      ))}
    </div>
  );
};

export default Kategorijas;
