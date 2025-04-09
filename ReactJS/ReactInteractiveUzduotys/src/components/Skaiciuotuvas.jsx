const Skaiciuotuvas = () => {
  let sk1 = 0;
  let sk2 = 0;
  const sk1Event = (e) => {
    sk1 = e.target.value;
  };
  const sk2Event = (e) => {
    sk2 = e.target.value;
  };

  const veiksmas = (e) => {
    switch (e) {
      case "/":
        sk1;
        break;
      case "+":
        // Kodas, jei kintamasis == reikšmė2
        break;
      case "-":
        // Kodas, jei kintamasis == reikšmė3
        break;
    }
  };

  return (
    <div>
      <h1>Skaiciuotuvas</h1>

      <input type="number" onChange={sk1Event} />
      <input type="number" onChange={sk2Event} />
      <button></button>
    </div>
  );
};

export default Skaiciuotuvas;
