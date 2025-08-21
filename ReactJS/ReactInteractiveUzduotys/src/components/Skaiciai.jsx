const Skaiciai = () => {
  let skaiciai = [1, 2, 3, 6, 9, 8, 7];
  let skaicius = Math.floor(Math.random() * 100 + 1);
  const skaiciuSuma = (skaiciai) => {
    alert(skaiciai.reduce((a, b) => a + b, 0));
  };

  const skaiciusMax = (skaiciai) => {
    alert(Math.max(...skaiciai));
  };
  return (
    <div>
      <h1>Skaiciai</h1>
      <button onClick={() => skaiciuSuma(skaiciai)}>suma</button>
      <button onClick={() => skaiciusMax(skaiciai)}>max skaicius</button>
    </div>
  );
};

export default Skaiciai;
