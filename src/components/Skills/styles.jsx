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
  width: 150px;
  height: 150px;
  background-color:${({ theme }) => theme.colors.bodyColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: ${({ theme }) => theme.sizes.fontSemi};
  padding: 0.5rem 1rem;
  margin-bottom: ${({ theme }) => theme.sizes.mb4};
  border-radius: 1rem;
  position:relative;
  overflow:hidden;

  

  &::before{
    position: absolute;
    content:"";
    width:100px;
    height:200%;
    background:${({theme}) => theme.colors.primary};
    animation: ${borderAnimation} 4s linear infinite;
  }

  &::after{
  content:"";
  position:absolute;
  background-color:${({ theme }) => theme.colors.bodyColor};
  inset:5px;
  border-radius:inherit;

  }

  img {
    width: 60px;
    height: 60px;
  }

  .skills-name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

export const Flex = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
