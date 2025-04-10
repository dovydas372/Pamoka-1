const Komp2 = () => {
  const intputTekstas = (e) => {
    let ivestasSk = e.nativeEvent.target.valueAsNumber;
    if (ivestasSk === 5) {
      alert("ivesta pedaug galiam tik 5 skaicius");
    }
  };
  return (
    <div>
      <h1>Komp2</h1>
      <input onInput={intputTekstas} type="number" />
    </div>
  );
};

export default Komp2;
