import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false}))
    );
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <main className={style.AppStyle}>
      <h1>Alura Studies</h1>
      <Formulario setTarefas={setTarefas} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </main>
  );
}

export default App;
