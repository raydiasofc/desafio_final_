import styled from "styled-components";

// Estilo do Body
export const Body = styled.div`
  background: #1e3932; /* Cor de fundo desejada */
  margin: 0; /* Remover qualquer margem padrão */
  padding: 0; /* Remover qualquer padding padrão */
  min-height: 100vh; /* Garantir que o fundo ocupe toda a altura da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Estilo da Seção
export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 50px 100px; /* Margens laterais e superior/inferior */
  gap: 60px; /* Espaçamento entre imagem e texto */
`;

// Estilo da Imagem
export const Image = styled.img`
  max-width: 50%; /* Ajusta a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
`;

// Atualizando o estilo da Div para acomodar o botão
export const Div = styled.div`
  max-width: 40%; /* Limita a largura do conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente o texto */

  h2 {
    font-size: 1.5rem;
    color: white; /* Cor do título menor */
    margin-bottom: 15px; /* Espaço abaixo do título menor */
  }

  h1 {
    font-size: 2.2rem;
    margin: 20px 0; /* Maior espaço acima e abaixo do título principal */
    color: white;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6; /* Espaçamento entre linhas */
    color: white; /* Cor do texto */
  }
`;

// Estilo do Botão
export const Button = styled.button`
  border-radius: 20px; /* Borda arredondada reduzida */
  background: #037143; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Remove borda padrão */
  padding: 10px 52px; /* Reduzindo o tamanho do botão */
  font-size: 0.9rem; /* Reduzindo o tamanho da fonte */
  cursor: pointer; /* Mostra cursor pointer ao passar o mouse */
  transition: background 0.3s ease; /* Efeito de transição */
  margin-top: 15px; /* Espaço acima do botão */
  align-self: flex-start; /* Garante que o botão fique alinhado ao início */

  &:hover {
    background: #025f35; /* Cor ao passar o mouse */
  }
`;
