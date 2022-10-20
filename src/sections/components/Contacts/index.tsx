import { ArrowUp, CopySimple, PaperPlaneTilt } from "phosphor-react";
import LetsTalkButton from "../../../shared/components/LetsTalkButton";
import Tag from "../../../shared/components/Tag";
import { Container } from "./styles";

const Contacts = () => {
  return (
    <Container>
      <div className="tag-and-title">
        <Tag text="📬 Contatos" />
        <h1>Vamos conversar!</h1>
      </div>

      <div className="wpp-and-email">
        <LetsTalkButton />
        <div className="email">
          <PaperPlaneTilt weight="thin" size={40} color="#412C7C" />
          <h4>E-mail:</h4>
          <h5>henriquesousa.dev@gmail.com</h5>
          <CopySimple weight="thin" size={32} color="#412C7C" />
        </div>
      </div>

      <h3>
        Voltar ao topo <ArrowUp />
      </h3>
    </Container>
  );
};

export default Contacts;
