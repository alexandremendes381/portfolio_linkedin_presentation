import styled from 'styled-components';


export const Footer = styled.footer`
  background-color: ${({theme})=> theme.colors.secondary};
  color:#fff;
  text-align: center;
  font-weight: ${({theme})=> theme.colors.fontSemi};
  padding: 2rem 0;

  span{
  display:block;
  font-size:${({theme})=> theme.sizes.h2FontSize};
  margin-bottom:${({theme})=> theme.sizes.mb4}; 
  }

  >svg{
    position:fixed;
    right:1rem;
    bottom:-20%;
    background-color:#4070F4;
    opacity: .8;
    padding: 0 .3rem;
    border-radius: .4rem;
    z-index:10;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }

  >svg:hover{
    background-color:${({theme})=> theme.colors.secondary};
  }

  .show-scroll{
    bottom: 5rem; 
  }
`;

export const SocialLinks = styled.div`
  margin-bottom:${({theme})=> theme.sizes.mb4};

  .link-icon{
  font-size:1.5rem;
  color:#fff;
  margin: 0 1rem; 
  }

  .link-icon svg:hover{
    color:${({theme})=> theme.colors.primary};
    transform: scale(1.4);
    transition:  .4s  
  }
`
