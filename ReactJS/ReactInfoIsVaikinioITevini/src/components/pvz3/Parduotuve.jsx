import { useState } from "react";
import PridetiPreke from "./PridetiPreke";
import PrekiuSarasas from "./PrekiuSarasas";

const Parduotuve = () => {
  const testData = [
    {
      pavadinimas: "Knyga",
      kiekis: 4,
      kaina: 8,
    },
    {
      pavadinimas: "Zurnalas",
      kiekis: 4,
      kaina: 8,
    },
    {
      pavadinimas: "Lego",
      kiekis: 4,
      kaina: 8,
    },
  ];
  const [prekes, setPrekes] = useState(testData);

  const gaudomPreke = (preke) => {
    setPrekes([preke, ...prekes]);
  };

  const nupirkomPreke = (preke) => {
    const indekas = prekes.findIndex((pr) => pr === preke);

    if (preke.kiekis > 0) {
      preke.kiekis--;
      const naujasPrekesMasyvas = prekes;
      naujasPrekesMasyvas[indekas] = preke;
      prekes[indekas] = preke;
      setPrekes([...prekes]);
    }
  };
  return (
    <div>
      <h1>Parduotuve</h1>
      <PridetiPreke siunciamPreke={gaudomPreke}></PridetiPreke>
      <PrekiuSarasas data={prekes} nupirko={nupirkomPreke}></PrekiuSarasas>
    </div>
  );
};

export default Parduotuve;
