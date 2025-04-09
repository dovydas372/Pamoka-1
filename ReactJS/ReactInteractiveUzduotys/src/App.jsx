import "./App.css";
import EiniPrieLentos from "./components/EiniPrieLentos";
import GeriausiasMedis from "./components/GeriausiasMedis";
import Laimejimas from "./components/Laimejimas";
import Sansas from "./components/Sansas";
import Skaiciai from "./components/Skaiciai";
import Skaiciuotuvas from "./components/Skaiciuotuvas";
import Tikrinimas from "./components/Tikrinimas";

function App() {
  return (
    <>
      <Laimejimas></Laimejimas>
      <Sansas></Sansas>
      <Tikrinimas></Tikrinimas>
      <GeriausiasMedis></GeriausiasMedis>
      <Skaiciai></Skaiciai>
      <EiniPrieLentos></EiniPrieLentos>
      <Skaiciuotuvas></Skaiciuotuvas>
    </>
  );
}

export default App;
