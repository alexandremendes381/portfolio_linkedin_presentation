import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

*,::before,::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
}

body{
  margin:${({ theme }) => theme.sizes.headerHeight} 0 0 0;
  font-family: "Inter", sans-serif;
  font-size:${({ theme }) => theme.sizes.normalFontSize};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.bodyColor};
 
}

main p{
  color: ${({ theme }) => theme.colors.textColor};
}

ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

a{
  text-decoration:none;
}

img{
    max-width: 100%;
    height: auto;
    display: block;
}

`;

export default GlobalStyle;
