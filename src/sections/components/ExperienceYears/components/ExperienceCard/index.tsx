import { Container } from "./styles";

interface ExperienceCardProps {
  img: string;
  yearsDesc: string;
  area: string;
}

const ExperienceCard = ({ img, yearsDesc, area }: ExperienceCardProps) => {
  return (
    <Container area={area}>
      <img src={img} alt="" />
      <h5>{yearsDesc}</h5>
      <h1>{area}</h1>
    </Container>
  );
};

export default ExperienceCard;
