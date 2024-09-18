import { GithubLogo, GoogleChromeLogo } from "@phosphor-icons/react";

import table_fipe from "../../assets/table_fipe.png";
import encomendas from "../../assets/encomendas.png";


import Title from "../Common/Title";

import * as S from "./styles";

const Works = () => {
  return (
    <S.Section id="Work">
      <Title text="Portfólio" />
      <S.Projects>
        <S.CardProjects>
          <a
            href="https://new-table-fipe-xooj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={table_fipe} alt="logo-projeto" />
          </a>
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/alexandremendes381/new_table_fipe"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://new-table-fipe-xooj.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={encomendas} alt="logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/alexandremendes381/project-nitronews"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://project-nitronews-o2uz.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              webiste
            </a>
          </S.LinkContainer>
        </S.CardProjects>
      </S.Projects>
    </S.Section>
  );
};

export default Works;
