import { Container } from "./styles";

interface TagSectionProps {
  text: string;
}

const TagSection = ({ text }: TagSectionProps) => {
  return <Container>{text}</Container>;
};

export default TagSection;
