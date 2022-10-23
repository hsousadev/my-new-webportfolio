import smoothScroll from "../../../../../../../shared/utils/smoothScroll";

import { Container } from "./styles";

const SectionsButton = () => {
  return (
    <Container>
      <button onClick={() => smoothScroll("hero")}>Home</button>
      <button onClick={() => smoothScroll("aboutMe")}>Sobre mim</button>
      <button onClick={() => smoothScroll("portfolio")}>Portfólio</button>
      <button onClick={() => smoothScroll("skills")}>Skills</button>
      <button onClick={() => smoothScroll("career")}>Carreira</button>
      <button onClick={() => smoothScroll("recommendations")}>
        Recomendações
      </button>
      <button onClick={() => smoothScroll("contacts")}>Contato</button>
    </Container>
  );
};

export default SectionsButton;
