import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completo,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completo ? style.itemCompletado : ""
      }`}
      tabIndex={0}
      onClick={() => {
        !completo &&
          selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completo,
            id,
          });
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completo,
            id,
          });
        }
      }}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {/* Renderização condicional */}
      {completo && (
        <span className={style.concluido} aria-label="tarefa concluída"></span>
      )}
    </li>
  );
}
