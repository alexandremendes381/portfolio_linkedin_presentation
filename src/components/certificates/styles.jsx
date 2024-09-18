import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-inline: 1rem;
  row-gap: 2rem;
  text-align: center;

  div {
    text-align: center;
    z-index:1;
  }

  .subtitle {
    margin-bottom: 1rem;
  }

  .skills-text {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    text-align: initial;
  }

  @media (min-width: 1024px) {
    margin-inline: auto;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
export const borderAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

export const CardsTech = styled.div`
  width: 450px; // Aumentando a largura do card
  height: 300px; // Aumentando a altura do card
  background-color: ${({ theme }) => theme.colors.bodyColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: ${({ theme }) => theme.sizes.fontSemi};
  padding: 1rem 1.5rem; // Aumentando o padding
  margin-bottom: ${({ theme }) => theme.sizes.mb4};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100px;
    height: 200%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${borderAnimation} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    inset: 5px;
    border-radius: inherit;
  }

  img {
    display: flex;
    width: 400px; // Aumentando a largura da imagem
    height: 250px; // Aumentando a altura da imagem
  }

  .skills-name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

export const Flex = styled.div`
  max-width: 1024px; // Aumentar o tamanho máximo do container
  margin: 0 auto;
  display: flex;
  justify-content: space-around; // Garantir que os itens fiquem lado a lado
  flex-wrap: wrap; // Garantir que os itens quebram a linha se necessário
  gap: 1rem;
`;
