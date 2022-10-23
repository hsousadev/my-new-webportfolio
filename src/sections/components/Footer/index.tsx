import { Container } from "./styles";

import Linkedin from "../../../shared/assets/icons/linkedin-white-circle.svg";
import Github from "../../../shared/assets/icons/github-white-circle.svg";
import Behance from "../../../shared/assets/icons/behance-white-circle.svg";
import Figma from "../../../shared/assets/icons/figma-white-circle.svg";

const Footer = () => {
  return (
    <Container>
      <h1>Copyright © Henrique Sousa · 2022</h1>

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
    </Container>
  );
};

export default Footer;
