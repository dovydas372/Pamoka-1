const Komp1 = () => {
  function zodzioIlgis(a) {
    return `${a.length}`;
  }
  let zodis = "nebeprisikiškiakopūsteliaujantiesiems";
  return (
    <div>
      | {zodis} | <strong>zodzio ilgis:</strong> {zodzioIlgis(zodis)} raides
    </div>
  );
};

export default Komp1;
