const AtvirkstinisTekstas = () => {
  const event = (e) => {
    let tekstas = e.nativeEvent.target.value;

    console.log(tekstas.split(" ").reverse().join(" "));
  };

  return (
    <div>
      <h1>PaspaudimuSkaičiuokle</h1>

      <input onChange={event} type="text" />
    </div>
  );
};

export default AtvirkstinisTekstas;
