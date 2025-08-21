import Naujiena from "./Naujiena";
import "./Naujienos.css";
export const Naujienos = () => {
  return (
    <div className="naujienos-wrapper">
      {" "}
      <h2>Naujienos</h2>
      <div className="Naujienos-list">
        <Naujiena />
        <Naujiena />
        <Naujiena />
      </div>
    </div>
  );
};
