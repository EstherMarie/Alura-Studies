import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <main className={style.AppStyle}>
      <h1>Alura Studies</h1>
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista tarefas={tarefas} />
    </main>
  );
}

export default App;
