import { ArrowLineDown } from "phosphor-react";

import TagSection from "../../../../../shared/components/TagSection";
import heroAvatar from "../../../../../shared/assets/illustrations/hero-avatar.svg";
import LetsTalkButton from "../../../../../shared/components/LetsTalkButton";

import { Container } from "./styles";

const Highlights = () => {
  return (
    <Container>
      <div className="left">
        <TagSection text="👋 Saudações!" />

        <div className="name-and-title" >
          <h1>
            Henrique <br /> Sousa
          </h1>
          <h6>Front-end developer · UI designer</h6>
        </div>
      </div>

      <img src={heroAvatar} alt="" />

      <div className="right">
        <h2>
          Baixar CV <ArrowLineDown size={32} color="rgba(123, 74, 226, 0.5)" />
        </h2>
        <LetsTalkButton />
      </div>
    </Container>
  );
};

export default Highlights;
