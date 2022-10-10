import { WhatsappLogo } from "phosphor-react";

import { Container } from "./styles";

const LetsTalkButton = () => {
  return (
    <Container
      onClick={() => window.open("whatsapp://send/?phone=5512991668819")}
    >
      <WhatsappLogo size={34} weight="thin" color="rgba(123, 74, 226, 0.5)" />
      <h1>Vamos conversar!</h1>
    </Container>
  );
};

export default LetsTalkButton;
