import { Link } from "react-scroll";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";
import undraw_male_avatar from "../../assets/male_user.svg";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Main id="Home">
      <section>
        <S.ContainerData>
          <h1 className="home-title">
            Olá,
            <br />
            Eu sou <span>Alexandre mendes</span> <br />
          </h1>
          <h3 className="animation">Desenvolvedor FullStack</h3>
          <Link to="Contact" className="button-contact">
            Contato
          </Link >
        </S.ContainerData>

        <S.SocialIcons>
          <a href="https://www.linkedin.com/in/alexandre-mendes-8b8473240/" target="_blank" rel="noreferrer" className="link-icon" >
            <LinkedinLogo size="32" />
          </a>
          <a href="https://www.instagram.com/alexandremendes381/" target="_blank" rel="noreferrer" className="link-icon">
            <InstagramLogo size="32" />
          </a>
          <a href="https://github.com/alexandremendes381?tab=repositories" target="_blank" rel="noreferrer" className="link-icon">
            <GithubLogo size="32" />
          </a>
        </S.SocialIcons>

        <S.CardImage className="home-img">
          <img src={undraw_male_avatar} alt="Alexandre" />
        </S.CardImage >
      </section>
    </S.Main>
  );
};

export default Home;
