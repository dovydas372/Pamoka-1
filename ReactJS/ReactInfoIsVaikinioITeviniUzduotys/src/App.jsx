import "./App.css";
import CounterTev from "./components/Counter/CounterTev";
import Imone from "./components/Imone/Imone";
import KnyguBendras from "./components/Knygos/KnyguBendras";
import ZodziuBendras from "./components/Zodziai/ZodziuBendras";

function App() {
  return (
    <>
      <CounterTev></CounterTev>
      <ZodziuBendras></ZodziuBendras>
      <KnyguBendras></KnyguBendras>
      <Imone></Imone>
    </>
  );
}

export default App;
