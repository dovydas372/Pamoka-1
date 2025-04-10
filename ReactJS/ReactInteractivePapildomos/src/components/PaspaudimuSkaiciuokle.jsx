const PaspaudimuSkaiciuokle = () => {
  let i = 0;
  const paspaustas = (e) => {
    i++;
    console.log(i);
  };

  return (
    <div>
      <h1>PaspaudimuSkaičiuokle</h1>

      <button onClick={paspaustas}>spausti</button>
    </div>
  );
};

export default PaspaudimuSkaiciuokle;
