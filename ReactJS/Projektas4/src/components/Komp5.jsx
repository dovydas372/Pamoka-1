const Komp5 = () => {
  const medziai = ["Ąžuolas", "Pušis", "Beržas", "Eglė", "Klevas"];
  const title = "Medziai";

  return (
    <div>
      <h1>{title}</h1>

      <ul>
        {medziai.map((medis) => (
          <li>{medis}</li>
        ))}
      </ul>
    </div>
  );
};

export default Komp5;
