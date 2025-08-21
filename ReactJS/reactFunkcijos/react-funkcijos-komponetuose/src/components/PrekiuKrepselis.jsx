const PrekiuKrepselis = () => {
  function atrinktosPagalKaina(a) {
    let atrusiuotasKrepselis = [];
    krepselis.forEach((objektas) => {
      if (objektas.kaina > a) {
        atrusiuotasKrepselis.push(objektas);
      }
    });

    return masyvoSpausdinimas(atrusiuotasKrepselis);
  }

  function masyvoSpausdinimas(a) {
    return a.map((objektas) => {
      return (
        <tr key={objektas.id}>
          <td> {objektas.pavadinimas}</td>
          <td> {objektas.kiekis}</td>
          <td> {objektas.kaina}</td>
          <td> {objektas.nuolaida} %</td>
        </tr>
      );
    });
  }

  function visuPrekiuNuolaida(a) {
    let sum = 0;
    a.forEach((element) => {
      sum += element.nuolaida;
    });
    return `${sum}`;
  }

  function visuPrekiuKaina(a) {
    let sum = 0;

    a.forEach((element) => {
      sum +=
        (element.kaina - (element.kaina * element.nuolaida) / 100) *
        element.kiekis;
    });

    return `${sum}`;
  }

  let krepselis = [
    {
      id: 1,
      pavadinimas: "Telefonas",
      kaina: 499.99,
      kiekis: 2,
      nuolaida: 10,
    },
    {
      id: 2,
      pavadinimas: "Žaidimų konsolė",
      kaina: 299.99,
      kiekis: 1,
      nuolaida: 15,
    },
    {
      id: 3,
      pavadinimas: "Ausinės",
      kaina: 89.99,
      kiekis: 3,
      nuolaida: 5,
    },
  ];
  return (
    <div>
      <h1>PrekiuKrepselis</h1>
      <table>{masyvoSpausdinimas(krepselis)}</table>\
      <p>visu nuolaidu suma: {visuPrekiuNuolaida(krepselis)}</p>
      <p>visu prekiu kaina: {visuPrekiuKaina(krepselis)}</p>
      <br />
      <br />
      <br />
      <table>{atrinktosPagalKaina(100)}</table>
    </div>
  );
};

export default PrekiuKrepselis;
