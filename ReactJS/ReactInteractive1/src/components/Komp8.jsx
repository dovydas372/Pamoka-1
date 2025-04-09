const Komp8 = () => {
  let skaicius = Math.floor(Math.random() * 3 + 1);

  const patikrinitiSk3 = (event) => {
    const spejimas = event.nativeEvent.target.getAttribute("data-spejimas");
    alert(skaicius == spejimas ? "atspejo" : "neatspejo");
  };

  const pakeistiSK = () => {
    skaicius = Math.floor(Math.random() * 10 + 1);
  };

  return (
    <div>
      <h1>Komp8</h1>
      <button onClick={patikrinitiSk3} data-spejimas="1">
        spejimas1
      </button>
      <button onClick={patikrinitiSk3} data-spejimas="2">
        spejimas2
      </button>
      <button onClick={patikrinitiSk3} data-spejimas="3">
        spejimas3
      </button>
    </div>
  );
};

export default Komp8;
