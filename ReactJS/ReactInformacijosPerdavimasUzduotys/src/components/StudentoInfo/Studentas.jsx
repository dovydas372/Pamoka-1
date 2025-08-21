import React from "react";
import Pazymis from "./Pazymis";

const Studentas = () => {
  let Mokiniai = [
    {
      vardas: "Tomas",
      pavarde: "Petraitis",
      mokykla: "Vilniaus gimnazija",
      programa: "Informatika",
    },
    {
      vardas: "Eglė",
      pavarde: "Jonaitė",
      mokykla: "Kauno licėjus",
      programa: "Biologija",
    },
    {
      vardas: "Mantas",
      pavarde: "Kavaliauskas",
      mokykla: "Šiaulių progimnazija",
      programa: "Matematika",
    },
    {
      vardas: "Austėja",
      pavarde: "Žukaitė",
      mokykla: "Klaipėdos mokykla",
      programa: "Chemija",
    },
  ];
  let pazymiai = [8, 9, 7, 10, 6, 9];
  return (
    <div>
      <h1>Studentas</h1>
      {pazymiai.map((pazym, i) => (
        <Pazymis
          key={i}
          pazymys={pazym}
          studentas={Mokiniai[i > 3 ? 0 : i]}
        ></Pazymis>
      ))}
    </div>
  );
};

export default Studentas;
