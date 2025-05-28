import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Api = () => {
  const [irasai, setIrasai] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setIrasai(json);
      });
  }, []);

  const visi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setIrasai(json.slice(json.length - 2, json.length));
      });
  };

  const pirmidu = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setIrasai(json.slice(0, 2));
      });
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Pagrindinis</h2>

      <button onClick={visi}>Visi irasai</button>
      <button onClick={pirmidu}>Pirmi du</button>
      <br></br>
      <br></br>

      {irasai.map((irasas, index) => (
        <div
          key={index}
          style={{
            border: "1px solid grey",
            borderRadius: "8px",
            marginBottom: "5px",
            padding: "5px 10px",
          }}
        >
          <h6>{irasas.title}</h6>
          <p>{irasas.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
