import React from "react";
import { Titulo as TituloEslilo } from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
};

const Titulo = (props: Props) => (
  <TituloEslilo fontSize={props.fontSize}>{props.children}</TituloEslilo>
);

export default Titulo;
