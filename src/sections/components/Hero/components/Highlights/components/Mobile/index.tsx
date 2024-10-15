import { ArrowLineDown } from "phosphor-react";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";

import { Context } from "../../../../../../../App";

import Behance from "../../../../../../../shared/assets/icons/behance-white-circle.svg";
import brazilFlag from "../../../../../../../shared/assets/icons/brazil-flag.svg";
import Figma from "../../../../../../../shared/assets/icons/figma-white-circle.svg";
import Github from "../../../../../../../shared/assets/icons/github-white-circle.svg";
import Linkedin from "../../../../../../../shared/assets/icons/linkedin-white-circle.svg";
import usaFlag from "../../../../../../../shared/assets/icons/usa-flag.svg";
import heroAvatar from "../../../../../../../shared/assets/illustrations/hero-avatar.svg";
import Resume from "../../../../../../../shared/docs/curriculo-henrique-sousa-mar-2024.pdf";

import LetsTalkButton from "../../../../../../../shared/components/LetsTalkButton";
import TagSection from "../../../../../../../shared/components/TagSection";

import Pulse from "../../../../../../../shared/components/Pulse";
import smoothScroll from "../../../../../../../shared/utils/smoothScroll";

import ResumePT from "../../../../../../../shared/docs/curriculo-henrique-sousa-mar-2024.pdf";
import ResumeEN from "../../../../../../../shared/docs/resume-henrique-sousa-mar-2024.pdf";

import { Container } from "./styles";

const Mobile = () => {
  const { language, setLanguage } = useContext(Context);
  const isLanguagePt = language === "pt";

  return (
    <Container language={language}>
      <div className="social-medias">
        <img
          src={Linkedin}
          alt=""
          onClick={() => window.open("https://www.linkedin.com/in/hsousadev/")}
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
      <div className="lang">
        <button id="pt" className="language" onClick={() => setLanguage("pt")}>
          PT <img src={brazilFlag} alt="" />
        </button>
        <button id="en" className="language" onClick={() => setLanguage("en")}>
          EN <img src={usaFlag} alt="" />
        </button>
      </div>

      <button
        className="pulse"
        onClick={() => smoothScroll("status")}
        style={{ color: "#4AE290", opacity: "100%", fontWeight: "bold" }}
      >
        <Pulse /> Status
      </button>

      <img className="avatar" src={heroAvatar} alt="" />

      <div className="texts">
        <TagSection text="greetings" />

        <div className="name-and-title">
          <h1>
            Henrique <br /> Sousa
          </h1>
          <h6> Front-end developer · UI designer</h6>
        </div>

        <div className="buttons">
          <a
            href={isLanguagePt ? ResumePT : ResumeEN}
            download={
              isLanguagePt
                ? "curriculo-henrique-mar-2024.pdf"
                : "resume-henrique-mar-2024.pdf"
            }
            target="_blank"
          >
            <FormattedMessage id="download" /> CV{" "}
            <ArrowLineDown size={24} color="rgba(123, 74, 226, 0.5)" />
          </a>

          <LetsTalkButton />
        </div>
      </div>
    </Container>
  );
};

export default Mobile;
