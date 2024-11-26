import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px; /* Espaçamento igual nas laterais */
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: green;
  }
`;

export const Ul = styled.ul`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  list-style: none;
`;

export const Button = styled.button`
  border-radius: 25px; /* Borda arredondada */
  background: #037143; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove borda padrão */
  padding: 10px 52px; /* Tamanho do botão */
  font-size: 1rem; /* Tamanho da fonte */
  cursor: pointer; /* Mostra cursor pointer ao passar o mouse */
  transition: background 0.3s ease; /* Efeito de transição */
  margin-top: 10px; /* Espaço acima do botão */

  &:hover {
    background: #025f35; /* Cor ao passar o mouse */
  }
`;
