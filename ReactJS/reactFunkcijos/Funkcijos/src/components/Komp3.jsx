const Komp3 = () => {
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
    <>
      <h2>prekes</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Preke</th>
          <th>Kaina</th>
          <th>Kiekis</th>
          <th>Prekiu uz kaina</th>
        </tr>

        {prekes.map((preke) => {
          return (
            <tr>
              <td>{preke.id}</td>
              <td>{preke.pavadinimas}</td>
              <td>{preke.kaina}</td>
              <td>{preke.kiekis}</td>
              <td>{preke.kiekis * preke.kaina}</td>
            </tr>
          );
        })}

        <tfoot>
          <td></td>
          <td></td>
          <td>{prekes.reduce((a, preke) => a + preke.kaina, 0)} &euro; </td>
          <td>{prekes.reduce((a, preke) => a + preke.kiekis, 0)} &euro; </td>
          <td>{prekes.reduce((a, preke) => a + preke.kiekis, 0)} &euro;</td>
        </tfoot>
      </table>
    </>
  );
};

export default Komp3;
