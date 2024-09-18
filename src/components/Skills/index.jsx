import Title from "../Common/Title";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import styled from "../../assets/styled-components.svg";
import typescript from "../../assets/typescript.svg";
import javascript from "../../assets/javascript.svg";
import git from "../../assets/git.svg";
import mongo from "../../assets/mongodb.svg";
import material from "../../assets/material-ui.svg";
import node from "../../assets/nodejs.svg";
import python from "../../assets/python.webp";
import reactImg from "../../assets/react.svg";
import * as S from "./styles";

// Lista de tecnologias com imagem e nome
const technologies = [
  { img: html, name: "HTML5" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JAVASCRIPT" },
  { img: node, name: "NODE" },
  { img: reactImg, name: "REACT" },
  { img: typescript, name: "TYPESCRIPT" },
  { img: material, name: "MATERIAL UI" },
  { img: styled, name: "STYLED COMPONENTS" },
  { img: git, name: "GIT" },
  { img: mongo, name: "MONGO DB" },
  { img: python, name: "PYTHON" },
];

const Skills = () => {
  return (
    <S.Section id="Skills">
      <Title text="Habilidades" />
      <S.SkillsContainer>
        <div>
          <h2 className="subtitle">Tecnologias</h2>
          <p className="skills-text">
            Atualmente, estou trabalhando com diversas tecnologias e estou
            constantemente buscando aprender novas ferramentas e técnicas para
            aprimorar minhas habilidades.
          </p>
          <S.Flex>
            {technologies.map((tech) => (
              <S.CardsTech key={tech.name}>
                <div className="skills-name">
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              </S.CardsTech>
            ))}
          </S.Flex>
        </div>
      </S.SkillsContainer>
    </S.Section>
  );
};

export default Skills;
