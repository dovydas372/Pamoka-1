const Komp6 = () => {
  let skaiciai1 = [2, 3, 5, 6];
  let skaiciai2 = [];

  return (
    <div>
      <h1>Komp6</h1>
      <h2>Skaiciai1</h2>
      {skaiciai1.length > 0 ? (
        <ul>
          {skaiciai1.map((skaicius) => (
            <li>{skaicius}</li>
          ))}
        </ul>
      ) : (
        <p>Skaiciaus nera</p>
      )}
      <h2>Skaiciai2</h2>
    </div>
  );
};

export default Komp6;
