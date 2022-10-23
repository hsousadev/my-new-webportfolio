import { Container } from "./styles";

interface TagSectionProps {
  text: string;
  id?: string;
}

const TagSection = ({ text, id }: TagSectionProps) => {
  return <Container id={id}>{text}</Container>;
};

export default TagSection;
