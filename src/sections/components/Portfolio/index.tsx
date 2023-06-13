import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { ArrowRight } from "phosphor-react";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import WebProjects from "./components/WebProjects";
import DesignProjects from "./components/DesignProjects";
import ProjectsWithVideos from "./components/ProjectsWithVideos";

import SelectButton from "../../../shared/components/SelectButton";
import TagSection from "../../../shared/components/TagSection";
import { GreenButton } from "../../../shared/components/GreenButton";

import designIcon from "../../../shared/assets/icons/design-icon.svg";
import codeIcon from "../../../shared/assets/icons/code-icon.svg";
import greenGithub from "../../../shared/assets/icons/green-github.svg";
import greenFigma from "../../../shared/assets/icons/green-figma.svg";
import greenBehance from "../../../shared/assets/icons/green-behance.svg";

import { Container } from "./styles";

const Portfolio = () => {
  const windowSize = useWindowSize();

  const [category, setCategory] = useState("web");

  return (
    <Container>
      <TagSection text="portfolio-emoji" id="portfolio" />

      <div className="header">
        {windowSize.windowWidth <= 768 ? (
          <h1>
            <FormattedMessage id="works" /> <br />{" "}
            <FormattedMessage id="and-projects" />
          </h1>
        ) : (
          <h1>
            <FormattedMessage id="works" />{" "}
            <FormattedMessage id="and-projects" />
          </h1>
        )}

        <div className="buttons">
          <SelectButton
            img={codeIcon}
            text="Web"
            onClick={() => setCategory("web")}
          />
          <SelectButton
            img={designIcon}
            text="Design"
            onClick={() => setCategory("design")}
          />
        </div>
      </div>

      <div className="cards">
        {category === "web" ? <WebProjects /> : <DesignProjects />}
      </div>
      <div className="see-more-projects">
        {category === "web" ? (
          <GreenButton
            icon={greenGithub}
            textId="see-more-projects-on-github"
            onClick={() =>
              window.open("https://github.com/justhenrique", "_blank")
            }
            arrow
          />
        ) : (
          <div className="buttons">
            <GreenButton
              icon={greenFigma}
              textId="see-more-projects-on-figma"
              onClick={() =>
                window.open("https://www.figma.com/@henriquedesousa", "_blank")
              }
              arrow
            />
            <GreenButton
              icon={greenBehance}
              textId="see-more-projects-on-behance"
              onClick={() =>
                window.open(
                  "https://www.behance.net/justhenriquedesign",
                  "_blank"
                )
              }
              arrow
            />
          </div>
        )}
      </div>

      <ProjectsWithVideos />
    </Container>
  );
};

export default Portfolio;
