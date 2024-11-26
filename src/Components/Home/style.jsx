import styled from "styled-components";

// Estilo principal do layout
export const MainStyle = styled.main`
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 20px; /* Espaço superior */
`;

// Estilo da seção onde o copo principal e as elipses são exibidos
export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

// Estilo do copo principal
export const Copo = styled.img`
  width: 80%; /* O copo principal ocupa 80% da largura disponível */
  max-width: 250px; /* Limita o tamanho máximo do copo */
  height: auto;
  transition: transform 0.3s ease;
  z-index: 1; /* Garante que o copo fique acima das elipses */
  position: relative;
`;

// Estilo para as elipses
export const Ellipse = styled.img`
  position: absolute;
  z-index: -1; /* Coloca as elipses atrás do copo */
  padding: 57px 307px 154px
  height: auto;
`;

// Estilo das imagens dos copos menores
export const Img = styled.img`
  width: 80px; /* Reduz o tamanho das imagens de copos */
  margin: 0 15px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Efeito de transição */
  z-index: 2; /* Garante que os copos menores fiquem acima das elipses */

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
    transform: translateY(-10px); /* Movimento para cima */
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
