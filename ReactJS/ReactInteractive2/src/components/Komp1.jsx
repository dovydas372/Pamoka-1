const Komp1 = () => {
  const intputTekstas = (e) => {
    let ivestasTekstas = e.nativeEvent.target.value;
    if (ivestasTekstas.length > 5) {
      alert("ivesta pedaug galiam tik 5 raides");
    }
  };
  return (
    <div>
      <h1>Komp1</h1>
      <input onInput={intputTekstas} type="text" />
    </div>
  );
};

export default Komp1;
