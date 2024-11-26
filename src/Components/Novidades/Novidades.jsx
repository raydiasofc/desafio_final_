import { Body, Section, Div, Image, Button } from "./style"; // Importando os estilos
import graocafe from "../../assets/imagens/graocafe.png";

export default function Novidades() {
  return (
    <Body>
      <Section>
        {/* Seção com o texto e a imagem ao lado */}
        <Div>
          <h2>PREPARAÇÃO</h2>
          <h1>Níveis de torra</h1>
          <p>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
            Torra Escura? Estas são as torras que fazem parte dos níveis de
            torra Starbucks®.
          </p>
          <Button>SAIBA MAIS</Button> {/* Botão embaixo do texto */}
        </Div>
        <Image src={graocafe} alt="Grão de café" /> {/* A imagem à direita */}
      </Section>
    </Body>
  );
}
