import styled, {keyframes} from "styled-components";

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
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

export const Container = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-inline: 1rem;

  form{
    display:flex;
    flex-direction:column;
    gap:2rem; 
  }

  input {
    background-color:#FFF;
    font-family: "Inter", sans-serif;
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.normalFontSize};
    font-weight: ${({ theme }) => theme.sizes.fontSemi};
    padding: 1rem;
    border-radius: 0.5rem;
    outline: none;
    border:1px solid hsl(202, 30%, 20%);
  }

  span{
    margin-top: -1.8rem;
    text-align:left;
    color:red;
    font-weight:500;
    font-size:.800rem;
  }

  input:focus{
   outline: 1px solid hsl(224, 89%, 60%);
   border:1px solid hsl(224, 89%, 60%);
  }

  textarea {
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.normalFontSize};
    font-weight: ${({ theme }) => theme.sizes.fontSemi};
    padding: 1rem;
    border-radius: 0.5rem;
    outline: none;
    resize:none;
    height:8rem;
    font-family: "Inter", sans-serif;
    line-height: 140%;
    border:none;
    border:1px solid hsl(202, 30%, 20%);
  }

  textarea:focus{
    outline: 1px solid hsl(224, 89%, 60%);
    border:1px solid hsl(224, 89%, 60%);
  }

  button{
    display: block;
    font-family: "Inter", sans-serif;
    background-color:${({ theme }) => theme.colors.primary};
    padding: .75rem 2.5rem;
    border: none;
    color:#FFF;
    border-radius: .5rem;
    font-size:.875rem;
    font-weight: ${({ theme }) => theme.sizes.fontSemi};
    margin-left: auto;
    cursor: pointer; 
  }

  button:disabled{
  background-color:${({ theme }) => theme.colors.secondary};
  cursor: not-allowed;
  }

  button:not(:disabled):hover{
    animation: ${Pulse} 0.7s ease-in-out infinite alternate;
    box-shadow: 0 15px 36px rgba(0, 0, 0, 0.5);  
  }

  @media (min-width: 768px) {
    justify-items: center;

    form {
      width: 360px;
    }
  }

  @media (min-width: 1024px) {
    margin-inline: auto;
  }
`;
