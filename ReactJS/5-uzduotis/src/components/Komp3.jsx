// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
  let preke = {
    pavadinimas: "Šokoladas",
    kaina: 2.5,
    kiekis: 10,
  };

  return (
    // TODO: į šio komponento div įstatykite
    // prekės pavadinimą, kainą ir kiekį
    <div>
      <h1>Komp3</h1>
      <p>{preke.pavadinimas}</p>
      <p>{preke.kiekis}</p>
      <p>{preke.kaina}</p>
    </div>
  );
};

export default Komp3;
