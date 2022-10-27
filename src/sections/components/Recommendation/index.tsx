import { FormattedMessage } from "react-intl";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import TagSection from "../../../shared/components/TagSection";
import CardRecommendation from "./components/CardRecommendation";
import NextButton from "../../../shared/components/NextButton";
import BackButton from "../../../shared/components/BackButton";

import romarioPicture from "../../../shared/assets/person/romario-lima.jpeg";
import marceloPicture from "../../../shared/assets/person/marcelo-guido.jpeg";

import { Container } from "./styles";

const Recommendation = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  const comments = [
    <CardRecommendation
      comment="henrique-is-very-engaged"
      authorPictureUrl="https://avatars.githubusercontent.com/u/43392489?v=4"
      authorName="Silvio Marques"
      position="tech-lead-at-ensinio"
    />,
    <CardRecommendation
      comment="washington-is-always"
      authorPictureUrl={romarioPicture}
      authorName="Romário Lima"
      position="computer-engineer"
    />,

    <CardRecommendation
      comment="creative-this-is-henrique"
      authorPictureUrl={marceloPicture}
      authorName="Me. Marcelo Guido"
      position="education-networks-professional"
    />,

    <CardRecommendation
      comment="henrique-is-a-hardworking"
      authorPictureUrl="https://avatars.githubusercontent.com/u/56457600?v=4"
      authorName="Matheus Campos"
      position="front-end-developer-at-ensinio"
    />,

    <CardRecommendation
      comment="i-worked-with-henrique"
      authorPictureUrl="https://avatars.githubusercontent.com/u/1855228?v=4"
      authorName="Anderson Brandão"
      position="head-of-engineering-at-xcorecng"
    />,
  ];

  return (
    <Container id="recommendations">
      <div className="header">
        <TagSection text="recommendations-emoji" />

        {isMobile ? (
          <h1>
            <FormattedMessage id="in" /> <br />{" "}
            <FormattedMessage id="deposition" />
          </h1>
        ) : (
          <h1>
            <FormattedMessage id="in" /> <FormattedMessage id="deposition" />
          </h1>
        )}
      </div>

      {!isMobile ? (
        <AliceCarousel
          mouseTracking
          touchTracking
          items={comments}
          renderNextButton={NextButton}
          renderPrevButton={BackButton}
          autoWidth
          autoHeight
          disableDotsControls
          paddingRight={400}
        />
      ) : (
        <div className="cards">
          <div className="content">
            <CardRecommendation
              comment="henrique-is-very-engaged"
              authorPictureUrl="https://avatars.githubusercontent.com/u/43392489?v=4"
              authorName="Silvio Marques"
              position="tech-lead-at-ensinio"
            />
            <CardRecommendation
              comment="washington-is-always"
              authorPictureUrl={romarioPicture}
              authorName="Romário Lima"
              position="computer-engineer"
            />
            <CardRecommendation
              comment="creative-this-is-henrique"
              authorPictureUrl={marceloPicture}
              authorName="Me. Marcelo Guido"
              position="education-networks-professional"
            />
            <CardRecommendation
              comment="henrique-is-a-hardworking"
              authorPictureUrl="https://avatars.githubusercontent.com/u/56457600?v=4"
              authorName="Matheus Campos"
              position="front-end-developer-at-ensinio"
            />
            <CardRecommendation
              comment="i-worked-with-henrique"
              authorPictureUrl="https://avatars.githubusercontent.com/u/1855228?v=4"
              authorName="Anderson Brandão"
              position="head-of-engineering-at-xcorecng"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Recommendation;
