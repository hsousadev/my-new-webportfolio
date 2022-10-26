import { FormattedMessage } from "react-intl";

import TagSection from "../../../shared/components/TagSection";
import profilePic from "../../../shared/assets/illustrations/profile-pic.png";

import { Container } from "./styles";

const AboutMe = () => {
  return (
    <Container id="aboutMe">
      <img src={profilePic} alt="" />

      <div className="description">
        <TagSection text="about-me-emoji" />

        <h1>
          Washington Henrique <br /> Fernandes de Sousa
        </h1>

        <p>
          👋 Hello world,{" "}
          <FormattedMessage id="you-can-call-me-henrique-pleasure" /> <br />
          <br />
          👨‍💻 <FormattedMessage id="for-over-2-years-developing" /> <br />
          🎓 <FormattedMessage id="graduated-in-ads" /> <br />
          💡 <FormattedMessage id="interests-in-front-end" /> <br />
          <br />
          🚀 <FormattedMessage id="trying-to-be-a-little-better" />
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
