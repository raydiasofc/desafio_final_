import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px; /* Espaçamento nas margens laterais */
  gap: 60px; /* Espaço entre a imagem e o conteúdo de texto */
`;

export const Image = styled.img`
  max-width: 50%; /* Ajustando a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
`;

export const Div = styled.div`
  max-width: 40%; /* Limita a largura do conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente o texto */

  h2 {
    font-size: 1.5rem;
    color: #333; /* Cor do título menor */
    margin-bottom: 15px; /* Espaço abaixo do título menor */
  }

  h1 {
    font-size: 2.2rem;
    margin: 20px 0; /* Espaço acima e abaixo do título principal */
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6; /* Espaçamento entre linhas */
    color: #666; /* Cor do texto */
    margin-bottom: 20px; /* Espaço abaixo do parágrafo */
  }
`;

export const Button = styled.button`
  align-self: flex-start; /* Alinha o botão ao início do container */
  border-radius: 20px; /* Borda arredondada */
  background: #037143; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove borda padrão */
  padding: 10px 20px; /* Tamanho do botão */
  font-size: 1rem; /* Tamanho da fonte */
  cursor: pointer; /* Aponta ao passar o mouse */
  transition: background 0.3s ease; /* Efeito de transição ao hover */

  &:hover {
    background: #025f35; /* Cor ao passar o mouse */
  }
`;
