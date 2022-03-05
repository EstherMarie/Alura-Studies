import React from "react";
import style from "./Botao.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
};

function Botao({ type, onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
