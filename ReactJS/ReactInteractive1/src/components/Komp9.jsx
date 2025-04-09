const Komp9 = () => {
  let skaicius = Math.floor(Math.random() * 3 + 1);

  const patikrinitiSk3 = (event) => {
    alert(skaicius == event ? "atspejo" : "neatspejo");
  };

  const pakeistiSK = () => {
    skaicius = Math.floor(Math.random() * 10 + 1);
  };

  return (
    <div>
      <h1>Komp9</h1>
      <button onClick={() => patikrinitiSk3(1)} data-spejimas="1">
        spejimas1
      </button>
      <button onClick={() => patikrinitiSk3(2)} data-spejimas="2">
        spejimas2
      </button>
      <button onClick={() => patikrinitiSk3(3)} data-spejimas="3">
        spejimas3
      </button>

      {[1, 2, 3, 4, 5].map((skaicius) => (
        <button onClick={() => patikrinitiSk3(skaicius)} data-spejimas="3">
          spejimas{skaicius}
        </button>
      ))}
    </div>
  );
};

export default Komp9;
