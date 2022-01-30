import React from "react";
import style from "./Lista.module.scss";

interface Tarefa {
  tarefa: string;
  tempo: string;
}

export default function Lista() {
  const tarefas: Array<Tarefa> = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:30:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
    {
      tarefa: "Sass",
      tempo: "03:30:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <li key={index} className={style.item}>
            <h3 className={style.tarefa}>{tarefa}</h3>
            <span className={style.tempo}>{tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
