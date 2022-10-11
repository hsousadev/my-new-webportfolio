import useWindowSize from "../../../../../shared/hooks/useWindowSize";

import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

import { Container } from "./styles";

const Highlights = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth < 768;

  return <Container>{isMobile ? <Mobile /> : <Desktop />}</Container>;
};

export default Highlights;
