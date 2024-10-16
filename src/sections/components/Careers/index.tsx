import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import useWindowSize from "../../../shared/hooks/useWindowSize";

import TagSection from "../../../shared/components/TagSection";
import CardInfo from "./components/CardInfo";

import { Context } from "../../../App";
import { Container } from "./styles";

const Careers = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  const { language } = useContext(Context);

  return (
    <Container>
      <TagSection text="career-emoji" />

      {isMobile ? (
        <h1>
          <FormattedMessage id="trajectory" /> <br />{" "}
          <FormattedMessage id="so-far" />
        </h1>
      ) : (
        <h1>
          <FormattedMessage id="trajectory" /> <FormattedMessage id="so-far" />
        </h1>
      )}

      <div className="columns">
        <div className="column">
          <h1 id="career">
            <FormattedMessage id="profissional-area" />
          </h1>
          <h3>
            2016 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                id="status"
                title="front-end-intrabank"
                description="working-at-intrabank"
                startAndEnd="jul-2023-actually"
                tags={[
                  "React JS",
                  "Typescript",
                  "Javascript",
                  "Styled-components",
                  "Tailwind",
                  "Vite",
                  "Next JS",
                  "Git",
                  "Github",
                  "Figma",
                ]}
                status
              />
              <CardInfo
                id="status"
                title="freelancer"
                description="working-as-a-freelancer"
                startAndEnd="may-2023-jul-2023"
                tags={[
                  "React JS",
                  "Next JS",
                  "Node JS",
                  "Typescript",
                  "Tailwind",
                  "Styled-components",
                  "Vercel",
                  "Netfly",
                  "Vite",
                  "Git",
                  "Github",
                  "Figma",
                ]}
              />
              <CardInfo
                title="front-end-developer-at-softexpert"
                description="working-in-the-application-workspace"
                startAndEnd="december-2022-currently"
                tags={[
                  "React JS",
                  "Javascript",
                  "CSS",
                  "JQuery",
                  "Jest",
                  "Storybook",
                  "Git",
                  "Gitlab",
                ]}
              />
              <CardInfo
                title="front-end-developer-at-coderockr"
                description="working-on-the-maintenance"
                startAndEnd="november-2022-december-2022"
                tags={[
                  "React JS",
                  "Javascript",
                  "CSS",
                  "Sass",
                  "JQuery",
                  "Git",
                  "Gitlab",
                  "Github",
                ]}
              />
              <CardInfo
                title="front-end-developer-at-ensinio"
                description="development-of-features"
                startAndEnd="april-2021-currently"
                tags={[
                  "React JS",
                  "Next JS",
                  "Typescript",
                  "Javascript",
                  "Styled-components",
                  "Redux",
                  "Figma",
                  "Git",
                  "Gitbucket",
                  "Github",
                ]}
              />
              <CardInfo
                title="designer-at-viralizzi"
                description="viralizzi-as-a-designer"
                startAndEnd="january-2021-april-2021"
                tags={["Figma", "Corel Draw", "Adobe Photoshop"]}
              />
              <CardInfo
                title="designer-editor-and-hardware-support-at-alorean"
                description="freelance-design-services"
                startAndEnd="january-2020-january-2021"
                tags={[
                  "Figma",
                  "Corel Draw",
                  "Hadwares",
                  "Adobe Premiere",
                  "Photoshop",
                ]}
              />
              <CardInfo
                title="programming-instructor-at-superGeeks"
                description="acting-as-a-programming"
                startAndEnd="february-2019-january-2021"
                tags={[
                  "Python",
                  "Javascript",
                  "C++",
                  "HTML",
                  "CSS",
                  "Scratch",
                  "Arduino",
                  "Kodular",
                  "Corel Draw",
                  "Unity",
                  "Unreal",
                ]}
              />
              <CardInfo
                title="young-apprentice"
                description="at-the-end-of-2016"
                startAndEnd="october-2016-december-2017"
                tags={["HMTL", "Corel Draw", "Adobe Photoshop", "Hardware"]}
              />
            </div>
          </div>
        </div>

        <div className="column">
          <h1>
            <FormattedMessage id="academic-area" />
          </h1>
          <h3>
            2015 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                title="mba-rocketseat"
                description="mba-rocketseat-description"
                startAndEnd="out-2024-out-2025"
                status
              />
              <CardInfo
                title="higher-degree-systems-analysis-and-development"
                description="graduated-from-fatec"
                startAndEnd="august-2019-august-2022"
              />
              <CardInfo
                title="technician-computer-networks"
                description="in-2019-i-graduated"
                startAndEnd="february-2018-june-2019"
              />
              <CardInfo
                title="english-advanced-conversation"
                description="in-the-second-half-of-2018"
                startAndEnd="july-2018-december-2018"
              />
              <CardInfo
                title="complete-high-school"
                description="at-the-end-of-2017"
                startAndEnd="january-2015-december-2017"
              />
              <CardInfo
                title="advanced-computing"
                description="in-november-2017"
                startAndEnd="february-2017-november-2017"
              />
              <CardInfo
                title="professional-informatics"
                description="at-the-end-of-2016-i-was-certified"
                startAndEnd="october-2015-december-2016"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careers;
