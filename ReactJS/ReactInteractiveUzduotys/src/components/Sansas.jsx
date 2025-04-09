const Sansas = () => {
  let skaicius = Math.floor(Math.random() * 10 + 1);
  const patikrinitiSk = (event) => {
    if (skaicius >= 5) {
      alert("Jus laimejote");
    } else {
      alert("Jus nelaimejote ");
    }
  };
  return (
    <div>
      <h1>Sansas</h1>
      <button onClick={patikrinitiSk}>Laimejimas jei 5 ir daugiau</button>
    </div>
  );
};

export default Sansas;
