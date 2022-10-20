import Hero from "./components/Hero";
import ExperienceYears from "./components/ExperienceYears";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Careers from "./components/Careers";
import Recommendation from "./components/Recommendation";
import Contacts from "./components/Contacts";

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
      <Recommendation />
      <Contacts />
    </Container>
  );
};

export default Sections;
