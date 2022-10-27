import { FormattedMessage } from "react-intl";
import useWindowSize from "../../../../../shared/hooks/useWindowSize";

import { Quotes } from "phosphor-react";
import { Container } from "./styles";

interface CardRecommendationProps {
  comment: string;
  authorPictureUrl: string;
  authorName: string;
  position: string;
}

const CardRecommendation = ({
  comment,
  authorPictureUrl,
  authorName,
  position,
}: CardRecommendationProps) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container>
      <div className="comment">
        {isMobile ? (
          <Quotes weight="thin" size={24} color="var(--PURPLE)" />
        ) : (
          <Quotes weight="thin" size={32} color="var(--PURPLE)" />
        )}

        <p>
          <FormattedMessage id={comment} />
        </p>
      </div>
      <div className="author-info">
        <img src={authorPictureUrl} alt="" />
        <div className="name-and-position">
          <h1>{authorName}</h1>
          <h3>
            <FormattedMessage id={position} />
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default CardRecommendation;
