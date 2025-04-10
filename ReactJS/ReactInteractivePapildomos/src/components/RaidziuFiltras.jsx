const RaidziuFiltras = () => {
  let pasirinkimas = "";
  const pasirinkti = (e) => {
    pasirinkimas = e.nativeEvent.target.value;
  };
  const filtruoti = (e) => {
    let tekstas = e.nativeEvent.target.value;
    if (pasirinkimas === "raidės") {
      console.log(
        tekstas
          .split("")
          .filter((simbolis) => simbolis.match(/[a-zA-Z]/))
          .join("")
      );
    } else if (pasirinkimas === "skaičiai") {
      console.log(
        tekstas
          .split("")
          .filter((simbolis) => simbolis.match(/[0-9]/))
          .join("")
      );
    } else {
      console.log(tekstas);
    }
  };
  return (
    <div>
      <h1>RaidziuFiltras</h1>

      <input onInput={filtruoti} type="text" id="inputLangas" />
      <label>Pasirinkite filtravimo tipa:</label>
      <select onChange={pasirinkti} id="Pasirinkimas">
        <option value="viskas">Rodyti viska</option>
        <option value="raidės">Tik raidės</option>
        <option value="skaičiai">Tik skaičiai</option>
      </select>
    </div>
  );
};

export default RaidziuFiltras;
