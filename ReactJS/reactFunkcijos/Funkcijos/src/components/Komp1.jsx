const komp1 = () => {
  let skaicius = 50;

  const arLyginis = () => {
    if (skaicius % 2 === 0) {
      return "lyginis";
    } else {
      return "nelyginis";
    }
  };

  return (
    <div>
      komp1
      <p>{skaicius}</p>
      <p>{4 + 5}</p>
      <p>{4 + 5 * skaicius}</p>
      <p>
        {skaicius} yra {skaicius % 2 === 0 ? "lyginis" : "nelyginis"}
      </p>
      <p>{arLyginis()}</p>
    </div>
  );
};

export default komp1;
