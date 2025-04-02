// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  const salys = [
    {
      pavadinimas: "Lietuva",
      sostine: "Vilnius",
      gyventojuSkaicius: 2800000,
    },
    {
      pavadinimas: "Latvija",
      sostine: "Ryga",
      gyventojuSkaicius: 1900000,
    },
    {
      pavadinimas: "Estija",
      sostine: "Talinas",
      gyventojuSkaicius: 1300000,
    },
  ];

  return (
    <div>
      <h1>Komp8</h1>
      {salys.map((salis) => (
        <div>
          <h3>{salis.pavadinimas}</h3>
          <p>{salis.sostine}</p>
          <p>{salis.gyventojuSkaicius}</p>
        </div>
      ))}
    </div>
  );
};

export default Komp8;
