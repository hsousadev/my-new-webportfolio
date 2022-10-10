import Logo from "../../../../../shared/assets/icons/logo.svg";
import Linkedin from "../../../../../shared/assets/icons/linkedin-white-circle.svg";
import Github from "../../../../../shared/assets/icons/github-white-circle.svg";
import Behance from "../../../../../shared/assets/icons/behance-white-circle.svg";

import SectionsButton from "./components/SectionsButton";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <SectionsButton />
      <div className="social-medias">
        <img src={Linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </div>
    </Container>
  );
};

export default TopBar;
