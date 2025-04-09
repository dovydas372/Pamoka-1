const Komp7 = () => {
  let skaicius = Math.floor(Math.random() * 10 + 1);
  const patikrinitiSk = (event) => {
    if (skaicius > 5) {
      alert("Slaptas skaicius didesnis uz 5 ");
    } else {
      alert("Slaptas skaicius mazesnis uz 5 ");
    }
  };

  const pakeistiSK = () => {
    skaicius = Math.floor(Math.random() * 10 + 1);
  };

  return (
    <div>
      <h1>Komp7</h1>
      <button onClick={patikrinitiSk}>Slaptas skaicius</button>
      <button onClick={pakeistiSK}>Pakeisti skaiciu</button>
    </div>
  );
};

export default Komp7;
