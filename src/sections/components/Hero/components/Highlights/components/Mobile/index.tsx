import { ArrowLineDown } from "phosphor-react";

import heroAvatar from "../../../../../../../shared/assets/illustrations/hero-avatar.svg";
import Linkedin from "../../../../../../../shared/assets/icons/linkedin-white-circle.svg";
import Github from "../../../../../../../shared/assets/icons/github-white-circle.svg";
import Behance from "../../../../../../../shared/assets/icons/behance-white-circle.svg";
import Figma from "../../../../../../../shared/assets/icons/figma-white-circle.svg";

import Resume from "../../../../../../../shared/docs/resume-henrique-sousa.pdf";

import { Container } from "./styles";
import TagSection from "../../../../../../../shared/components/TagSection";
import LetsTalkButton from "../../../../../../../shared/components/LetsTalkButton";

const Mobile = () => {
  return (
    <Container>
      <div className="social-medias">
        <img
          src={Linkedin}
          alt=""
          onClick={() =>
            window.open("https://www.linkedin.com/in/justhenrique/")
          }
        />
        <img
          src={Github}
          alt=""
          onClick={() => window.open("https://github.com/justhenrique")}
        />
        <img
          src={Figma}
          alt=""
          onClick={() => window.open("https://www.figma.com/@henriquedesousa")}
        />
        <img
          src={Behance}
          alt=""
          onClick={() =>
            window.open("https://www.behance.net/justhenriquedesign")
          }
        />
      </div>

      <img className="avatar" src={heroAvatar} alt="" />

      <div className="texts">
        <TagSection text="👋 Saudações!" />

        <div className="name-and-title">
          <h1>
            Henrique <br /> Sousa
          </h1>
          <h6>Front-end developer · UI designer</h6>
        </div>

        <div className="buttons">
          <a href={Resume} download="resume-henrique-sousa.pdf" target="_blank">
            Baixar CV{" "}
            <ArrowLineDown size={24} color="rgba(123, 74, 226, 0.5)" />
          </a>

          <LetsTalkButton />
        </div>
      </div>
    </Container>
  );
};

export default Mobile;
