import { Section, Div, Button, Image } from "./style"; // Importando os estilos

import loja from "../../assets/imagens/loja.png";

export default function Sobre() {
  return (
    <Section>
      {" "}
      {/* Usando o componente Section estilizado */}
      <Image src={loja} alt="Loja Starbucks" /> {/* A imagem */}
      <Div>
        {" "}
        {/* Usando o componente Div estilizado */}
        <h2>PREPARAÇÃO</h2>
        <h1>Níveis de torra</h1>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas são as torras que fazem parte dos níveis de torra
          Starbucks®.
        </p>
        <Button>Saiba Mais</Button> {/* Botão abaixo do texto */}
      </Div>
    </Section>
  );
}
