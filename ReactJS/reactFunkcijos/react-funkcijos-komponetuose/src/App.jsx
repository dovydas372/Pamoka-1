// @ts-nocheck
import "./App.css";
import Darbuotojas from "./components/Darbuotojas";
import PrekiuKrepselis from "./components/PrekiuKrepselis";
import Skaicius from "./components/Skaicius";
import TrysSkaiciai from "./components/TrysSkaiciai";
import ZodzioIlgis from "./components/ZodzioIlgis";

function App() {
  return (
    <>
      <ZodzioIlgis></ZodzioIlgis>
      <Skaicius></Skaicius>
      <TrysSkaiciai></TrysSkaiciai>
      <Darbuotojas></Darbuotojas>
      <PrekiuKrepselis></PrekiuKrepselis>
    </>
  );
}

export default App;
