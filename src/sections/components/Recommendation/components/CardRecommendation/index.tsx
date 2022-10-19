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
  return (
    <Container>
      <div className="comment">
        <Quotes weight="thin" size={32} color="var(--PURPLE)" />
        <p>{comment}</p>
      </div>
      <div className="author-info">
        <img src={authorPictureUrl} alt="" />
        <div className="name-and-position">
          <h1>{authorName}</h1>
          <h3>{position}</h3>
        </div>
      </div>
    </Container>
  );
};

export default CardRecommendation;
