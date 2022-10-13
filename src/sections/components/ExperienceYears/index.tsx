import useWindowSize from "../../../shared/hooks/useWindowSize";

import ExperienceCard from "./components/ExperienceCard";

import codeIcon from "../../../shared/assets/icons/code-icon.svg";
import designIcon from "../../../shared/assets/icons/design-icon.svg";
import projectsIcon from "../../../shared/assets/icons/projects-icon.svg";

import { Container } from "./styles";

const ExperienceYears = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 960;

  return (
    <Container>
      <div className="cards">
        {windowSize.windowWidth <= 768 ? (
          <>
            <ExperienceCard
              img={codeIcon}
              yearsDesc="3 anos como"
              area="Programador"
            />
            <ExperienceCard
              img={designIcon}
              yearsDesc="4 anos como"
              area="Designer"
            />
            <ExperienceCard
              img={projectsIcon}
              yearsDesc="7 anos de"
              area="Trabalhos"
            />
          </>
        ) : (
          <>
            <ExperienceCard
              img={codeIcon}
              yearsDesc="3 anos como"
              area="Programador"
            />
            <ExperienceCard
              img={projectsIcon}
              yearsDesc="7 anos de"
              area="Trabalhos"
            />
            <ExperienceCard
              img={designIcon}
              yearsDesc="4 anos como"
              area="Designer"
            />
          </>
        )}
      </div>

      {!isMobile && (
        <div className="descriptions">
          <div>
            <h5>Desenvolvedor</h5>
            <h1>Front-end</h1>
          </div>
          <div>
            <h5>Dezenas de projetos e</h5>
            <h1>Experiências</h1>
          </div>
          <div>
            <h5>Designer freelancer e</h5>
            <h1>UI · UX</h1>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ExperienceYears;
