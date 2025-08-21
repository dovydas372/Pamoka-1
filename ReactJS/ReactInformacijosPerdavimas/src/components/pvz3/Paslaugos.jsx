import React from "react";
import Paslauga from "./Paslauga";

const Paslaugos = () => {
  return (
    <div>
      <h1>Paslaugos</h1>
      <Paslauga
        pavadinimas="darzo ravejimas"
        kategorija="sodininkyste"
        kaina="200"
      ></Paslauga>
      <Paslauga
        pavadinimas="vartu trvarkymas"
        kategorija="meistro paslauga"
        kaina="200"
      ></Paslauga>
      <Paslauga
        pavadinimas="karves melzimas"
        kategorija="gyvulininkyste"
        kaina="200"
      ></Paslauga>
    </div>
  );
};

export default Paslaugos;
