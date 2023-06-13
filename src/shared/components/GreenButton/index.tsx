import { Container } from "./styles";

import greenArrowRight from "../../assets/icons/green-arrow-right.svg";
import { FormattedMessage } from "react-intl";

interface GreenButtonProps {
  icon: string;
  textId: string;
  arrow?: boolean;
  onClick: () => void;
}

export function GreenButton({ arrow, icon, textId, onClick }: GreenButtonProps) {
  return (
    <Container onClick={onClick}>
      <div className="content">
        <img src={icon} alt="" width={32} height={32} />
        <p>
          <FormattedMessage id={textId} />
        </p>
      </div>
      {arrow && <img src={greenArrowRight} alt="" />}
    </Container>
  );
}
