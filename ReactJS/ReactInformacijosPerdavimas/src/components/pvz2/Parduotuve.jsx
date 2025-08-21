import React from "react";
import Preke from "./preke";

const Parduotuve = () => {
  return (
    <div>
      <h1>parduotuve</h1>
      <Preke pavadinimas="Obuoliai" kaina="5" kiekis="100"></Preke>
      <Preke pavadinimas="Kriause" kaina="6" kiekis="150"></Preke>
      <Preke pavadinimas="Agurkai" kaina="10" kiekis="10"></Preke>
    </div>
  );
};

export default Parduotuve;
