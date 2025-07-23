import { FormattedMessage } from "react-intl";

import TagSection from "../../../shared/components/TagSection";
import profilePic from "../../../shared/assets/illustrations/profile-pic-2025.webp";

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
          <FormattedMessage id="about-me-intro" /> {" "}
          <FormattedMessage id="about-me-expertise" /> {" "}
          <FormattedMessage id="about-me-backend" /> <br /> <br />
          <FormattedMessage id="about-me-interests" /> <br />
          <FormattedMessage id="about-me-goal" />
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
