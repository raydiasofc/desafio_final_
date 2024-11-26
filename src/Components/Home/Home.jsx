import React, { useState } from "react";
import cpamarelo from "../../assets/imagens/cpamarelo.png";
import cpvermelho from "../../assets/imagens/cpvermelho.png";
import cplaranja3 from "../../assets/imagens/cplaranja3.png";
import ellipse1 from "../../assets/imagens/ellipse1.png";
import ellipse2 from "../../assets/imagens/ellipse2.png";
import ellipse3 from "../../assets/imagens/ellipse3.png";
import cplaranjagrande from "../../assets/imagens/cplaranjagrande.png";
import cpamarelogrande from "../../assets/imagens/cpamarelogrande.png";
import cpvermelhogrande from "../../assets/imagens/cpvermelhogrande.png";
import { MainStyle, Copo, Section, Img, Button, Ellipse } from "./style"; // Importação dos estilos

export default function Home() {
  const [currentImages, setCurrentImages] = useState({
    copo: cplaranjagrande,
    ellipse: ellipse1,
  });

  // Mapeamento das imagens
  const imageMap = {
    cplaranja3: { copo: cplaranjagrande, ellipse: ellipse1 },
    cpamarelo: { copo: cpamarelogrande, ellipse: ellipse2 },
    cpvermelho: { copo: cpvermelhogrande, ellipse: ellipse3 },
  };

  // Função para trocar as imagens
  const handleImageClick = (key) => {
    setCurrentImages(imageMap[key]);
  };

  return (
    <MainStyle>
      <h2>Mais que Café</h2>
      <h1>
        Isso é <span>Starbucks</span>
      </h1>
      <p>
        A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos
        cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte
        Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes
        e frias, doces diferenciados e sanduíches.
      </p>

      <Button>SAIBA MAIS</Button>

      <div>
        <Img
          src={cplaranja3}
          alt="Laranja"
          onClick={() => handleImageClick("cplaranja3")}
        />
        <Img
          src={cpamarelo}
          alt="Amarelo"
          onClick={() => handleImageClick("cpamarelo")}
        />
        <Img
          src={cpvermelho}
          alt="Vermelho"
          onClick={() => handleImageClick("cpvermelho")}
        />
      </div>

      <Copo src={currentImages.copo} alt="Copo Atual" />
      <Ellipse src={currentImages.ellipse} alt="Ellipse Atual" />
    </MainStyle>
  );
}
