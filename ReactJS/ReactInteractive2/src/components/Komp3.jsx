const Komp3 = () => {
  const zodis = "azuolas";

  const intputTekstas = (e) => {
    let ivestasZodis = e.nativeEvent.target.value;
    if (ivestasZodis.length === zodis.length) {
      if (ivestasZodis === zodis) {
        alert("atspejote zodi");
      }
    }
  };

  return (
    <div>
      <h1>Komp3</h1>
      <input onInput={intputTekstas} type="text" />
    </div>
  );
};

export default Komp3;
