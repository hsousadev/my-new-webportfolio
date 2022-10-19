import { Container } from "./styles";

interface CardInfoProps {
  title: string;
  description: string;
  yearsOfExperience: string;
  startAndEnd: string;
}

const CardInfo = ({
  title,
  description,
  yearsOfExperience,
  startAndEnd,
}: CardInfoProps) => {
  return (
    <Container>
      <div className="title-and-description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="dates">
        <strong>{yearsOfExperience}</strong>
        <h5>{startAndEnd}</h5>
      </div>
    </Container>
  );
};

export default CardInfo;
