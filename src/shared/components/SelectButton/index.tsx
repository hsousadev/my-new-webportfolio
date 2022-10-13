import { Container } from "./styles";

interface SelectButtonProps {
  img: string;
  text: string;
  onClick?: () => void;
}

const SelectButton = ({ img, text, onClick }: SelectButtonProps) => {
  return (
    <Container onClick={onClick}>
      <img src={img} alt="" />
      <h1>{text}</h1>
    </Container>
  );
};

export default SelectButton;
