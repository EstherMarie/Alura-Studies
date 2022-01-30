import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss";

function App() {
  return (
    <main className={style.AppStyle}>
      <h1>Alura Studies</h1>
      <Formulario />
      <Lista />
    </main>
  );
}

export default App;
