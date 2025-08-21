const Tikrinimas = () => {
  let skaicius = Math.floor(Math.random() * 100 + 1);
  const patikrinitiSk = (event) => {
    if (skaicius > 30) {
      alert("skaicius didesnis uz 30");
    } else {
      alert("skaicius mazesnis uz 30 ");
    }
  };
  const arLyginis = (event) => {
    if (skaicius % 2 == 0) {
      alert("Skaicius lyginis");
    } else {
      alert("Skaicius nelyginis ");
    }
  };

  const arPirminis = (event) => {
    if (skaicius >= 1) {
      for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
          alert("skaicius nepirminis");
          break;
        } else {
          alert("skaicius pirminis");
          break;
        }
      }
    } else {
      alert("Skaicius nepirminis ");
    }
  };
  return (
    <div>
      <h1>Tikrinimas</h1>
      <button onClick={patikrinitiSk}>ar didesnis uz 30</button>
      <button onClick={arLyginis}>Ar lyginis</button>
      <button onClick={arPirminis}>Ar pirminis</button>
    </div>
  );
};

export default Tikrinimas;
