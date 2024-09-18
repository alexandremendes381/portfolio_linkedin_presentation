import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom:2rem;


  @media (max-width:768px){
    margin-top:4rem;
  }

  @media (min-width:768px){
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-inline:1rem;
  padding-top: 3rem;
  padding-bottom:2rem;
  row-gap:2rem;
  text-align:center;

  .about-img{
    justify-self:center;
  }

  .about-img img{
    width:200px;
    border-radius:.5rem;
  }

  .subtitle{
   
    margin-bottom:1rem;
    font-weight:700;
  }

  .about-description{
    line-height:1.3;
    
  }


  @media (max-width:768px){
    margin-top:4rem;
  }

  @media (min-width:768px){
    padding-top: 4rem;
    padding-bottom: 3rem;
    grid-template-columns:repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }

  .about-img img{
    width:300px;
  }

  @media (min-width: 1024px)  {
    margin-inline:auto;
  }
`;