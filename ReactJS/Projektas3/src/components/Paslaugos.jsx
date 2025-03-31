import Paslauga from "./Paslauga";
import "./Paslaugos.css";
const Paslaugos = () => {
  return (
    <div className="paslaugos">
      <h1>Paslaugos</h1>
      <div className="PaslaugosList">
        <Paslauga></Paslauga>
        <Paslauga></Paslauga>
        <Paslauga></Paslauga>
      </div>
    </div>
  );
};

export default Paslaugos;
