const Komp3 = () => {
  const fnPaspaudus = (event) => {
    console.log(event);
    console.log("mygtukas paspaustas");
  };
  return (
    <div>
      <h1>Komp3</h1>
      <button onClick={fnPaspaudus}>Dabar</button>
    </div>
  );
};

export default Komp3;
