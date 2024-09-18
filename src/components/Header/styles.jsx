import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.containerColor};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.sizes.zFixed};
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
  height:4rem;


.name{
  color:${({ theme }) => theme.colors.titleColor};
  font-size:1rem;
  }

  .nav {
    margin: 0 144px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-weight: ${({ theme }) => theme.sizes.fontSemi};
    height:${({ theme }) => theme.sizes.headerHeight};
    /* gap:4rem; */
  }



  .nav-list{
    display: flex;
    margin-inline:1rem;
  }


  .nav-list li {
    margin-left: ${({ theme }) => theme.sizes.mb6};
    margin-bottom:0;
  }

  .nav-link {
    position: relative;
    color: ${({ theme }) => theme.colors.titleColor};
    cursor: pointer;
  }

  .nav-link:hover{
    position: relative;
  }

  .nav-link:hover::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

.active-link{
  color:${({ theme }) => theme.colors.secondary};
}

  .active-link::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .navs-btns {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .sun{
    display:none;
    cursor: pointer;
  }

  

  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: ${({ theme }) => theme.sizes.headerHeight};
      right:-100%;
      width: 80%;
      height: 100%;
      padding: 2rem;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: .5s;
    }

    .nav-menu.open {
      right:0;
    }
    
    .nav-list{
    display: grid;
    gap: 1.5rem;
  }
  }

`;

export const ContentMobile = styled.div`
  display:none;

 @media (max-width:768px) {
    color:${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    cursor: pointer;
    display:block;
 }
`

export const ThemeChange = styled.div`
  visibility:hidden;
`