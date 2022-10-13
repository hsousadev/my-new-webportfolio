import Hero from "./components/Hero";
import ExperienceYears from "./components/ExperienceYears";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

import { Container } from "./styles";

const Sections = () => {
  return (
    <Container>
      <Hero />
      <ExperienceYears />
      <AboutMe />
      <Portfolio />
    </Container>
  );
};

export default Sections;
