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
                status
              />
              <CardInfo
                id="status"
                title="freelancer"
                description="working-as-a-freelancer"
                startAndEnd="may-2023-jul-2023"
              />
              <CardInfo
                title="front-end-developer-at-softexpert"
                description="working-in-the-application-workspace"
                startAndEnd="december-2022-currently"
              />
              <CardInfo
                title="front-end-developer-at-coderockr"
                description="working-on-the-maintenance"
                startAndEnd="november-2022-december-2022"
              />
              <CardInfo
                title="front-end-developer-at-ensinio"
                description="development-of-features"
                startAndEnd="april-2021-currently"
              />
              <CardInfo
                title="designer-at-viralizzi"
                description="viralizzi-as-a-designer"
                startAndEnd="january-2021-april-2021"
              />
              <CardInfo
                title="programming-instructor-at-superGeeks"
                description="acting-as-a-programming"
                startAndEnd="february-2019-january-2021"
              />
              <CardInfo
                title="designer-editor-and-hardware-support-at-alorean"
                description="freelance-design-services"
                startAndEnd="january-2020-january-2021"
              />
              <CardInfo
                title="young-apprentice"
                description="at-the-end-of-2016"
                startAndEnd="october-2016-december-2017"
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
