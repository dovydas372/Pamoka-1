import React from "react";
import Studentas from "./Studentas";

const Grupe = () => {
  let mokinys = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
  };
  return (
    <div>
      <h1>Grupe</h1>
      <Studentas studentas={mokinys}></Studentas>
    </div>
  );
};

export default Grupe;
