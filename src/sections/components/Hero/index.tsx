import TopBar from "./components/TopBar";
import Highlights from "./components/Highlights";

import { Container } from "./styles";

const Hero = () => {
  return (
    <Container>
      <TopBar />
      <Highlights />
    </Container>
  );
};

export default Hero;
