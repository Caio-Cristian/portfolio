import React from "react";
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { BotaoTema, Descricao, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Caio Cristian</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Caio-Cristian
      </Paragrafo>
      <Descricao>Desenvolvedor Full-Stack</Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
