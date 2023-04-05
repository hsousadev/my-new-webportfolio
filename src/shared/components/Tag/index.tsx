import { Container } from "./styles";

interface TagProps {
  text: string;
  online?: boolean;
  beta?: boolean;
}

const Tag = ({ text, online, beta }: TagProps) => {
  return <Container beta={beta} online={online}>{text}</Container>;
};

export default Tag;
