import React from "react";
import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import EstilosGlobais, { Container } from "./styles";

function App() {
  return (
    <>
      <EstilosGlobais />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
