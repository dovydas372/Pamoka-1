// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const kursai = [
    { pavadinimas: "cnc", trukme: "10valandu", kaina: "500eur" },
    { pavadinimas: "3D", trukme: "100valandu", kaina: "800eur" },
    { pavadinimas: "Dizainas", trukme: "500valandu", kaina: "500eur" },
  ];

  return (
    <div>
      <h1>Komp9</h1>
      {kursai.map((kursas) => (
        <div>
          <h3>{kursas.pavadinimas}</h3>
          <p>{kursas.trukme}</p>
          <p>{kursas.kaina}</p>
        </div>
      ))}
    </div>
  );
};

export default Komp9;
