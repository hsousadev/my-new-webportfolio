import Hero from "./components/Hero";
import ExperienceYears from "./components/ExperienceYears";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Careers from "./components/Careers";

import { Container } from "./styles";

const Sections = () => {
  return (
    <Container>
      <Hero />
      <ExperienceYears />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Careers />
    </Container>
  );
};

export default Sections;
