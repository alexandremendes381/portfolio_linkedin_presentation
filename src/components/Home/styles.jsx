import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  section {
    max-width: 1024px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% - 2rem);
    height: calc(100vh - 3rem);
    row-gap: 1rem;
    margin-inline: 1rem;
  }

  @media (max-width: 365px) {
    section {
      row-gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    section {
      row-gap: 2rem;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 8rem 0 2rem;
      height: 100vh;
    }
  }

  @media (min-width: 1024px) {
    margin-inline: 22rem;
  }
`;

export const Cursor = keyframes`
 from {
      border-right-color: hsl(224, 8%, 15%);
    }
    to {
      border-right-color: hsl(224, 89%, 60%);
    }
`;
export const Line = keyframes`
 from {
      width: 0;
    }
    to {
      width: 12.5em;
    }
`;

export const Pulse = keyframes`
 0% {
      transform: scale(1);
    }
 100% {
      transform: scale(1.10);
    }
`;

export const Float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-30px);
  }

  100%{
    transform: translateY(0px);
  }
`

export const ContainerData = styled.div`
  align-self: center;

  .home-title {
    font-size: ${({ theme }) => theme.sizes.bigFontSize};
    color: ${({ theme }) => theme.colors.homeTitle};
  }

  .home-title span {
    color: ${({ theme }) => theme.colors.primary};
  }

  .animation {
    font-size: ${({ theme }) => theme.sizes.bigFontSize};
    color: ${({ theme }) => theme.colors.homeTitle};
    margin-bottom: 1.5rem;
    animation: ${Cursor} 1s steps(40) infinite normal,
      ${Line} 5s steps(40) 1s normal both;
    border-right: 3px solid;
    white-space: nowrap;
    overflow: hidden;
  }

  .button-contact {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 0.75rem 2.5rem;
    font-weight: ${({ theme }) => theme.sizes.fontSemi};
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .button-contact:hover {
    animation: ${Pulse} 0.7s ease-in-out infinite alternate;
    box-shadow: 0 15px 36px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 500px) {
    .home-title,
    .animation {
      font-size: ${({ theme }) => theme.sizes.h2FontSize};
    }
  }

  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;

  .link-icon {
    width: max-content;
    margin-bottom: 1rem;
    transition: all;
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .link-icon svg:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.4);
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }

  .link-icon {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.sizes.mb4};
  }
`;

export const CardImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 15.5rem;
  margin: 3rem 1.5rem;

img {
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  object-fit: cover; /* Ou use 'contain' dependendo da necessidade */
  width: 13.5rem;
  transform: translateY(0px);
  animation: ${Float} 3s ease-in-out infinite;
}

  @media (max-width: 365px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin-inline: auto;
    width: 12.5rem;
    bottom: -5%;
    right: 1;

    img {
      width: 20rem;
      height: 18rem;
      object-position: 50% 35%;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 20rem;
      height: 18rem;
      object-position: 50% 35%;
    }
  }
`;