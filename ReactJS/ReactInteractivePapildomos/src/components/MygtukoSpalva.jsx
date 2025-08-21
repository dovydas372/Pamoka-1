const MygtukoSpalva = () => {
  const pakeistiSpalva = () => {
    let mygtukas = document.getElementById("mygtukas");
    let randomSpalva = Math.floor(Math.random() * 254 + 1);
    console.log(randomSpalva);
    mygtukas.style.backgroundColor = `rgba(${randomSpalva}, ${randomSpalva}, ${randomSpalva}, 1)`;
  };
  return (
    <div>
      <h1> MygtukoSpalva</h1>

      <button onClick={pakeistiSpalva} id="mygtukas">
        pakeisk splavą
      </button>
    </div>
  );
};

export default MygtukoSpalva;
