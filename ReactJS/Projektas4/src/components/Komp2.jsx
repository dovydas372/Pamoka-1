const Komo2 = () => {
  let skaiciai = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h1>komp2</h1>
      <p>{skaiciai.join(", ")}</p>
      <p>{skaiciai[0]}</p>
      <p>{skaiciai.length}</p>
    </div>
  );
};

export default Komo2;
