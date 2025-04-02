const Komp4 = () => {
  const automobilis = {
    marke: "Toyota",
    modelis: "Corolla",
    metai: 2022,
    spalva: "mėlyna",
    kuroTipas: "benzinas",
  };

  return (
    <div>
      <h1>Automobilio informacija</h1>
      <ul>
        <li>Markė: {automobilis.marke}</li>
        <li>Modelis: {automobilis.modelis}</li>
        <li>Metai: {automobilis.metai}</li>
        <li>Spalva: {automobilis.spalva}</li>
        <li>Kuro tipas: {automobilis.kuroTipas}</li>
      </ul>
    </div>
  );
};

export default Komp4;
