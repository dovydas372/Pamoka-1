const Skaicius = () => {
  let Skaicius = 20;
  function arLyginis(a) {
    if (a % 2 === 0) {
      return `${a} skaicius yra lyginis`;
    } else {
      return `${a} skaicius yra nelyginis`;
    }
  }

  function arTeigiamas(a) {
    if (a > 0) {
      return `${a} skaičius yra teigiamas`;
    }
    if (a === 0) {
      return `skaičius yra nulis`;
    } else {
      return `${a} skaičius yra neigiamas`;
    }
  }
  return (
    <div>
      <h2>{Skaicius}</h2>
      <p>{arLyginis(Skaicius)}</p>
      <p>{arTeigiamas(Skaicius)}</p>
    </div>
  );
};

export default Skaicius;
