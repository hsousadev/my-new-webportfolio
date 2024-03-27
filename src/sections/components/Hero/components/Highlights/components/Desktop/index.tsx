import { ArrowLineDown } from "phosphor-react";
import { FormattedMessage } from "react-intl";

import LetsTalkButton from "../../../../../../../shared/components/LetsTalkButton";
import TagSection from "../../../../../../../shared/components/TagSection";

import Behance from "../../../../../../../shared/assets/icons/behance-white-circle.svg";
import Figma from "../../../../../../../shared/assets/icons/figma-white-circle.svg";
import Github from "../../../../../../../shared/assets/icons/github-white-circle.svg";
import Linkedin from "../../../../../../../shared/assets/icons/linkedin-white-circle.svg";
import heroAvatar from "../../../../../../../shared/assets/illustrations/hero-avatar.svg";

import Resume from "../../../../../../../shared/docs/curriculo-henrique-sousa-mar-2024.pdf";

import { Container } from "./styles";

const Desktop = () => {
  return (
    <Container>
      <div className="left">
        <TagSection text="greetings" />

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
              window.open("https://www.linkedin.com/in/hsousadev/")
            }
          />
          <img
            src={Github}
            alt=""
            onClick={() => window.open("https://github.com/hsousadev")}
          />
          <img
            src={Figma}
            alt=""
            onClick={() => window.open("https://www.figma.com/@hsousadev")}
          />
          <img
            src={Behance}
            alt=""
            onClick={() => window.open("https://www.behance.net/hsousadev")}
          />
        </div>
      </div>

      <img src={heroAvatar} alt="" />

      <div className="right">
        <a
          href={Resume}
          download="resume-henrique-mar-2024.pdf"
          target="_blank"
        >
          <FormattedMessage id="download" /> CV
          <ArrowLineDown size={24} color="rgba(123, 74, 226, 0.5)" />
        </a>

        <LetsTalkButton />
      </div>
    </Container>
  );
};

export default Desktop;
