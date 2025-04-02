const Komp7 = () => {
  const prekes = [
    {
      id: 1,
      kaina: 50,
      kiekis: 30,
      pavadinimas: "tusinukas",
    },
    {
      id: 2,
      kaina: 200,
      kiekis: 15,
      pavadinimas: "sasiuvinis",
    },
    {
      id: 3,
      kaina: 500,
      kiekis: 10,
      pavadinimas: "kuprinė",
    },
    {
      id: 4,
      kaina: 1000,
      kiekis: 5,
      pavadinimas: "laptopas",
    },
    {
      id: 5,
      kaina: 20,
      kiekis: 50,
      pavadinimas: "trintukas",
    },
  ];
  return (
    <div>
      <h1>Komp7</h1>
      <div className="prekiuSarasas">
        {prekes.length > 0 ? (
          prekes.map((preke) => (
            <div className="prekesBlokas">
              <h3>pavadinimas: {preke.pavadinimas}</h3>
              <p>kaina: {preke.kaina} Eur</p>
              <p>kiekis: {preke.kiekis} vnt</p>
            </div>
          ))
        ) : (
          <p>prekiu nera</p>
        )}
      </div>
    </div>
  );
};

export default Komp7;
