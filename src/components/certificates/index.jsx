import React, { useState } from 'react';
import Title from "../Common/Title";
import certificado1 from "../../assets/certificado1.png";
import certificado2 from "../../assets/certificado2.png";
import certificado3 from "../../assets/certificado3.png";
import certificado4 from "../../assets/certificado4.png";
import certificado5 from "../../assets/certificado5.png";
import certificado6 from "../../assets/certificado6.png";
import certificado7 from "../../assets/certificado7.png";
import certificado8 from "../../assets/certificado8.png";
import certificado9 from "../../assets/certificado9.png";
import certificado10 from "../../assets/certificado10.png";
import certificado11 from "../../assets/certificado11.png";
import certificado12 from "../../assets/certificado12.png";
import certificado13 from "../../assets/certificado13.png";
import * as S from "./styles";
import Modal from '../modal';

// Lista de tecnologias com imagem e nome
const technologies = [
  { img: certificado1, name: "HTML, CSS E JAVASCRIPT" },
  { img: certificado2, name: "FUNDAMENTOS HARDWARE E SOFTWARE" },
  {
    img: certificado3,
    name: "DESENVOLVENDO APLICAÇÕES MOBILE COM ANDROID STUDIO E REACT NATIVE",
  },
  { img: certificado4, name: "DATA COLLECTION AND PROCESSING WITH PYTHON" },
  {
    img: certificado5,
    name: "PROGRAMMING FOR EVERYBODY (GETTING STARTED WITH PYTHON)",
  },
  { img: certificado6, name: "PYTHON BASICS" },
  { img: certificado7, name: "PYTHON CLASSES AND INHERITANCE" },
  { img: certificado8, name: "PYTHON DATA STRUCTURES" },
  { img: certificado9, name: "PYTHON FUNCTIONS, FILES, AND DICTIONARIES" },
  { img: certificado10, name: "USING PYTHON TO ACCESS WEB DATA" },
  { img: certificado11, name: "SUPERVISED MACHINE LEARNING: REGRESSION" },
  { img: certificado12, name: "EXPLORATORY DATA ANALYSIS FOR MACHINE LEARNING" },
  { img: certificado13, name: "SEGURANÇA EM TECNOLOGIA DA INFORMAÇÃO" },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  const openModal = (imgSrc) => {
    setModalImgSrc(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImgSrc('');
  };

  return (
    <S.Section id="Certificates">
      <Title text="CERTIFICAÇÕES" />
      <S.SkillsContainer>
        <div>
          <h2 className="subtitle">Tecnologias</h2>
          <S.Flex>
            {technologies.map((tech) => (
              <S.CardsTech key={tech.name}>
                <div className="skills-name">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    onClick={() => openModal(tech.img)}
                  />
                  <span>{tech.name}</span>
                </div>
              </S.CardsTech>
            ))}
          </S.Flex>
        </div>
      </S.SkillsContainer>
      <Modal isOpen={modalOpen} onClose={closeModal} imgSrc={modalImgSrc} />
    </S.Section>
  );
};

export default Certificates;
