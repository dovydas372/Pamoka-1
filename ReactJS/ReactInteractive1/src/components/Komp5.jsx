const Komp5 = () => {
  const pirmasButton = (event) => {
    console.log(event.target);
  };
  const antrasButton = (event) => {
    console.log(event.nativeEvent.target.textContent);
  };
  const treciasButton = (event) => {
    console.log(event);
    alert("Trecias");
  };
  return (
    <div>
      <h1>Komp5</h1>
      <button onClick={pirmasButton}>Pirmas</button>
      <button onClick={antrasButton}>Antras</button>
    </div>
  );
};

export default Komp5;
