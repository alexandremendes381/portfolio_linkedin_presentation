import undraw from "../../assets/undraw.svg";
import Title from "../Common/Title";
import * as S from "./styles";

const About = () => {
  return (
    <S.Section>
      <Title text="Sobre" />
      <S.AboutContainer>
        <div className="about-img" id="About">
          <img src={undraw} alt="Alexandre" />
        </div>
        <div>
          <h2 className="subtitle">Eu sou Alexandre mendes</h2>
          <p className="about-description">
            📱 Sou um desenvolvedor web dedicado à criação de websites
            sustentáveis e escaláveis, com foco em performance e eficiência.
            Trabalho com ReactJs, JavaScript, TypeScript, e Vite, e meu objetivo
            é entregar soluções inovadoras que superem as expectativas dos
            usuários e atendam às necessidades do setor de Health Tech.
            🎯Aplicando rigorosas práticas de Clean Code e técnicas avançadas de
            otimização, garantindo que cada projeto seja eficiente, escalável e
            de alta qualidade. Estou comprometido em adotar as melhores práticas
            de desenvolvimento para assegurar a performance e a manutenção a
            longo prazo dos aplicativos. 🚀Se você procura um desenvolvedor
            proativo, especializado em tecnologias de ponta e preparado para
            enfrentar desafios técnicos, estou à disposição para discutir como
            posso agregar valor aos seus projetos.
          </p>
        </div>
      </S.AboutContainer>
    </S.Section>
  );
};

export default About;
