import React from "react";

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <li key={index}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
