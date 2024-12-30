import React from "react";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui
      molestias excepturi cupiditate accusamus consequuntur quae. Quisquam
      temporibus ducimus reiciendis sit saepe voluptate natus, cupiditate dicta
      corrupti, fugiat necessitatibus aliquam!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Caio-Cristian&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Caio-Cristian&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
