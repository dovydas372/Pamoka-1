const Skaiciuotuvas = () => {
  let sk1 = 0;
  let sk2 = 0;
  const sk1Event = (e) => {
    sk1 = e.target.valueAsNumber;
  };
  const sk2Event = (e) => {
    sk2 = e.target.valueAsNumber;
  };

  const veiksmas = (e) => {
    switch (e) {
      case "/":
        console.log(sk1 / sk2);
        break;
      case "*":
        console.log(sk1 * sk2);
        break;
      case "+":
        console.log(sk1 + sk2);
        break;
      case "-":
        console.log(sk1 - sk2);
        break;
    }
  };

  return (
    <div>
      <h1>Skaiciuotuvas</h1>

      <input type="number" onInput={sk1Event} />
      <input type="number" onInput={sk2Event} />
      <button onClick={() => veiksmas("/")}>/</button>
      <button onClick={() => veiksmas("*")}>*</button>
      <button onClick={() => veiksmas("+")}>+</button>
      <button onClick={() => veiksmas("-")}>-</button>
    </div>
  );
};

export default Skaiciuotuvas;
