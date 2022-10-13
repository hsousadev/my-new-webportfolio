import { ArrowLineDown } from "phosphor-react";

import TagSection from "../../../../../../../shared/components/TagSection";
import LetsTalkButton from "../../../../../../../shared/components/LetsTalkButton";

import heroAvatar from "../../../../../../../shared/assets/illustrations/hero-avatar.svg";
import Linkedin from "../../../../../../../shared/assets/icons/linkedin-white-circle.svg";
import Github from "../../../../../../../shared/assets/icons/github-white-circle.svg";
import Behance from "../../../../../../../shared/assets/icons/behance-white-circle.svg";
import Resume from "../../../../../../../shared/docs/curriculo-henrique-2022.pdf";

import { Container } from "./styles";

const Desktop = () => {
  return (
    <Container>
      <div className="left">
        <TagSection text="👋 Saudações!" />

        <div className="name-and-title">
          <h1>
            Henrique <br /> Sousa
          </h1>

          <h6>Front-end developer · UI designer</h6>
        </div>

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
            src={Behance}
            alt=""
            onClick={() =>
              window.open("https://www.behance.net/justhenriquedesign")
            }
          />
        </div>
      </div>

      <img src={heroAvatar} alt="" />

      <div className="right">
        <a href={Resume} download="curriculo-henrique-2022.pdf" target="_blank">
          Baixar CV <ArrowLineDown size={24} color="rgba(123, 74, 226, 0.5)" />
        </a>

        <LetsTalkButton />
      </div>
    </Container>
  );
};

export default Desktop;
