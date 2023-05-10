import { useContext } from "react";
import { FormattedMessage } from "react-intl";

import { Context } from "../../../../../../../App";
import smoothScroll from "../../../../../../../shared/utils/smoothScroll";

import brazilFlag from "../../../../../../../shared/assets/icons/brazil-flag.svg";
import usaFlag from "../../../../../../../shared/assets/icons/usa-flag.svg";

import Pulse from "../../../../../../../shared/components/Pulse";

import { Container } from "./styles";

const SectionsButton = () => {
  const { language, setLanguage } = useContext(Context);
  return (
    <Container language={language}>
      <div className="sections">
        <button
          onClick={() => smoothScroll("status")}
          style={{ color: "#4AE290", opacity: "100%", fontWeight: "bold" }}
        >
          <Pulse /> Status
        </button>
        <button onClick={() => smoothScroll("hero")}>Home</button>
        <button onClick={() => smoothScroll("aboutMe")}>
          <FormattedMessage id="about-me" />
        </button>
        <button onClick={() => smoothScroll("portfolio")}>
          <FormattedMessage id="portfolio" />
        </button>
        <button onClick={() => smoothScroll("skills")}>Skills</button>
        <button onClick={() => smoothScroll("career")}>
          <FormattedMessage id="career" />
        </button>
        <button onClick={() => smoothScroll("recommendations")}>
          <FormattedMessage id="recommendations" />
        </button>
        <button onClick={() => smoothScroll("contacts")}>
          <FormattedMessage id="contact" />
        </button>
      </div>

      <div className="lang">
        <button id="pt" className="language" onClick={() => setLanguage("pt")}>
          PT <img src={brazilFlag} alt="" />
        </button>
        <button id="en" className="language" onClick={() => setLanguage("en")}>
          EN <img src={usaFlag} alt="" />
        </button>
      </div>
    </Container>
  );
};

export default SectionsButton;
