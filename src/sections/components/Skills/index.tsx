import useWindowSize from "../../../shared/hooks/useWindowSize";

import Tag from "../../../shared/components/Tag";

import cssIcon from "../../../shared/assets/icons/css-icon.svg";
import figmaIcon from "../../../shared/assets/icons/figma-icon.svg";
import gitIcon from "../../../shared/assets/icons/git-icon.svg";
import githubIcon from "../../../shared/assets/icons/github-icon.svg";
import htmlIcon from "../../../shared/assets/icons/html-icon.svg";
import insomniaIcon from "../../../shared/assets/icons/insomnia-icon.svg";
import javascriptIcon from "../../../shared/assets/icons/javascript-icon.svg";
import nextIcon from "../../../shared/assets/icons/next-icon.svg";
import reactIcon from "../../../shared/assets/icons/react-icon.svg";
import typescriptIcon from "../../../shared/assets/icons/typescript-icon.svg";

import bitbucketIcon from "../../../shared/assets/icons/bitbucket-icon.svg";
import dockerIcon from "../../../shared/assets/icons/docker-icon.svg";
import mongoIcon from "../../../shared/assets/icons/mongo-icon.svg";
import mysqlIcon from "../../../shared/assets/icons/mysql-icon.svg";
import nodejsIcon from "../../../shared/assets/icons/nodejs-icon.svg";
import postgresIcon from "../../../shared/assets/icons/postgres-icon.svg";
import pythonIcon from "../../../shared/assets/icons/python-icon.svg";
import sassIcon from "../../../shared/assets/icons/sass-icon.svg";
import tailwindIcon from "../../../shared/assets/icons/tailwind-icon.svg";
import vueIcon from "../../../shared/assets/icons/vue-icon.svg";

import { Container } from "./styles";

const Skills = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container>
      <Tag text="🧑‍💻 Skills" />
      {isMobile ? (
        <h1>
          Tecnologias <br /> e habilidades
        </h1>
      ) : (
        <h1>Tecnologias e habilidades</h1>
      )}

      <h3>Techs que uso no dia a dia</h3>
      <div className="techs">
        <img src={reactIcon} alt="" />
        <img src={javascriptIcon} alt="" />
        <img src={typescriptIcon} alt="" />
        <img src={nextIcon} alt="" />
        <img src={cssIcon} alt="" />
        <img src={htmlIcon} alt="" />
        <img src={figmaIcon} alt="" />
        <img src={gitIcon} alt="" />
        <img src={githubIcon} alt="" />
        <img src={insomniaIcon} alt="" />
      </div>
      <h3>Outras techs com que já realizei projetos</h3>
      <div className="techs">
        <img src={bitbucketIcon} alt="" />
        <img src={vueIcon} alt="" />
        <img src={nodejsIcon} alt="" />
        <img src={tailwindIcon} alt="" />
        <img src={sassIcon} alt="" />
        <img src={pythonIcon} alt="" />
        <img src={postgresIcon} alt="" />
        <img src={mysqlIcon} alt="" />
        <img src={mongoIcon} alt="" />
        <img src={dockerIcon} alt="" />
      </div>
    </Container>
  );
};

export default Skills;
