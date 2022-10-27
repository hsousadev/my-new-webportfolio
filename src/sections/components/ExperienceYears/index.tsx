import useWindowSize from "../../../shared/hooks/useWindowSize";

import ExperienceCard from "./components/ExperienceCard";

import codeIcon from "../../../shared/assets/icons/code-icon.svg";
import designIcon from "../../../shared/assets/icons/design-icon.svg";
import projectsIcon from "../../../shared/assets/icons/projects-icon.svg";

import { Container } from "./styles";
import { FormattedMessage } from "react-intl";

const ExperienceYears = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 960;

  return (
    <Container id="experienceYears">
      <div className="cards">
        {windowSize.windowWidth <= 768 ? (
          <>
            <ExperienceCard
              img={codeIcon}
              yearsDesc="three-years-as-a"
              area="developer"
            />
            <ExperienceCard
              img={designIcon}
              yearsDesc="4-years-as-a"
              area="designer"
            />
            <ExperienceCard
              img={projectsIcon}
              yearsDesc="seven-years-of"
              area="work"
            />
          </>
        ) : (
          <>
            <ExperienceCard
              img={codeIcon}
              yearsDesc="three-years-as-a"
              area="developer"
            />
            <ExperienceCard
              img={projectsIcon}
              yearsDesc="seven-years-of"
              area="work"
            />
            <ExperienceCard
              img={designIcon}
              yearsDesc="4-years-as-a"
              area="designer"
            />
          </>
        )}
      </div>

      {!isMobile && (
        <div className="descriptions">
          <div>
            <h5>
              <FormattedMessage id="developer" />
            </h5>
            <h1>Front-end</h1>
          </div>
          <div>
            <h5>
              <FormattedMessage id="dozens-of-projects-and" />
            </h5>
            <h1>
              <FormattedMessage id="experiences" />
            </h1>
          </div>
          <div>
            <h5>
              <FormattedMessage id="freelance-designer-and" />
            </h5>
            <h1>UI · UX</h1>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ExperienceYears;
