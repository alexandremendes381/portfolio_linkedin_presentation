// Modal.js
import React from 'react';
import * as S from './styles'; // Supondo que você esteja usando styled-components

const Modal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="Imagem ampliada" />
        <button onClick={onClose}>Fechar</button>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
