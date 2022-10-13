import { Container } from "./styles";

interface TagProps {
  text: string;
  online?: boolean;
}

const Tag = ({ text, online }: TagProps) => {
  return <Container online={online}>{text}</Container>;
};

export default Tag;
