import { useState, useEffect } from 'react';
import { LinkedinLogo, InstagramLogo,GithubLogo,ArrowUp } from "@phosphor-icons/react"
import { animateScroll as scroll } from 'react-scroll';
import * as S from "./styles"



const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({duration:200});
  };

  useEffect(()=>{
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 760){
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 760){
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  },[showScroll])

  return (
    <S.Footer>
      <span>Alexandre mendes</span>
      <S.SocialLinks>
        <a href="https://www.linkedin.com/in/alexandre-mendes-8b8473240/" className="link-icon">
          <LinkedinLogo size="31" weight="fill"/>
        </a>
        <a href="https://www.instagram.com/alexandremendes381/" className="link-icon">
        <InstagramLogo size="31" weight="fill"/>
        </a>
        <a href="https://github.com/alexandremendes381?tab=repositories" className="link-icon">
        <GithubLogo size="31" weight="fill"/>
        </a>
      </S.SocialLinks>
      <p>&#169; 2022 copyright all right reserved</p>
      {showScroll && <ArrowUp size="32" weight="fill" className={ showScroll && 'show-scroll'} onClick={scrollToTop} style={{cursor: "pointer"}}/>}
    </S.Footer>
    
  
  )
}

export default Footer