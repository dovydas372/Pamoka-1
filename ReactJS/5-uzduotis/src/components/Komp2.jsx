// TODO: prijunkite šį komponentą prie App.jsx

const Komp2 = () => {
  let knyga = "Faustas";
  let autorius = "Johanas Volfganas Gėtė";

  return (
    // TODO: į čia esančius h1 ir p elementus
    // įstatykite knygos pavadinimą ir autorių
    <div>
      <h1>Komp2</h1>
      <h2>knygos pavadinimas: {knyga}</h2>
      <p>Ją parašė: {autorius}</p>
    </div>
  );
};

export default Komp2;
