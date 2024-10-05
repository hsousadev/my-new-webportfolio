import { FormattedMessage } from "react-intl";

import TagSection from "../../../shared/components/TagSection";
import profilePic from "../../../shared/assets/illustrations/profile-pic-2024.jpg";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import { Container } from "./styles";

const AboutMe = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container id="aboutMe">
      <img
        className="profile-pic"
        src={profilePic}
        alt=""
        width={isMobile ? "80%" : "32%"}
        height="auto"
      />

      <div className="description">
        <TagSection text="about-me-emoji" />

        <h1>
          Washington Henrique <br /> Fernandes de Sousa
        </h1>

        <p>
          👋 Hello world,{" "}
          <FormattedMessage id="you-can-call-me-henrique-pleasure" /> <br />
          👨‍💻 <FormattedMessage id="for-over-3-years-developing" /> <br />
          📐 <FormattedMessage id="for-over-3-years-developing-2" /> <br />
          🎓 <FormattedMessage id="graduated-in-ads" /> <br />
          💡 <FormattedMessage id="interests-in-front-end" /> <br />
          🚀 <FormattedMessage id="trying-to-be-a-little-better" />
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
