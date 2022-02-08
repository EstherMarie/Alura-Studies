import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default function Item({ tarefa, tempo, selecionado, completo, id }: ITarefa) {
  console.log('Item supimpa: ',{ tarefa, tempo, selecionado, completo, id })
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
