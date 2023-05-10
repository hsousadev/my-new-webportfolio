import { FormattedMessage } from "react-intl";
import { Container } from "./styles";

import Pulse from "../../../../../shared/components/Pulse";

interface CardInfoProps {
  id?: string;
  title: string;
  description: string;
  yearsOfExperience?: string;
  startAndEnd: string;
  status?: boolean;
  onClick?: () => void;
}

const CardInfo = ({
  title,
  description,
  yearsOfExperience,
  startAndEnd,
  status,
  onClick,
  id,
}: CardInfoProps) => {
  return (
    <Container id={id} onClick={onClick} status={status}>
      <div className="title-and-description">
        <h4>
          <FormattedMessage id={title} />
        </h4>
        <p>
          <FormattedMessage id={description} />
        </p>
      </div>

      <div className="dates">
        {yearsOfExperience && (
          <strong>
            <FormattedMessage id={yearsOfExperience} />
          </strong>
        )}

        <h5>
          {status && <Pulse />}
          <FormattedMessage id={startAndEnd} />
        </h5>
      </div>
    </Container>
  );
};

export default CardInfo;
