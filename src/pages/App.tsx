import React from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";

function App() {
  return (
    <main className={style.AppStyle}>
      <h1>Alura Studies</h1>
      <Formulario />
      <Cronometro />
      <Lista />
    </main>
  );
}

export default App;
