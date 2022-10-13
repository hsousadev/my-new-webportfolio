import useWindowSize from "../../../shared/hooks/useWindowSize";

import TopBar from "./components/TopBar";
import Highlights from "./components/Highlights";

import { Container } from "./styles";

const Hero = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 960;

  return (
    <Container>
      {!isMobile && <TopBar />}
      <Highlights />
    </Container>
  );
};

export default Hero;
