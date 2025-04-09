const EiniPrieLentos = () => {
  const studentai = [
    "Jonas",
    "Petras",
    "Margarita",
    "Eglė",
    "Tomas",
    "Viktorija",
    "Andrius",
  ];
  let studentas = Math.floor(Math.random() * studentai.length);
  const studentasRandom = () => {
    studentas = Math.floor(Math.random() * studentai.length);
    alert(studentai[studentas]);
  };

  return (
    <div>
      <h1>Eini prie lentos</h1>
      <button onClick={studentasRandom}>Istraukti studento varda</button>
    </div>
  );
};

export default EiniPrieLentos;
