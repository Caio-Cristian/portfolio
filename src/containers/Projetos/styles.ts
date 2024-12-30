import styled from "styled-components";

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 50%; /* Cada item ocupa 50% da largura do contêiner */
    box-sizing: border-box;
    padding: 10px; /* Adiciona espaçamento interno */
  }

  @media (max-width: 768px) {
    li {
      flex: 0 0 100%; /* Cada item ocupa 100% da largura do contêiner */
    }
  }
`;
