import { FormattedMessage } from "react-intl";
import { Container } from "./styles";

import Pulse from "../../../../../shared/components/Pulse";
import Tag from "../../../../../shared/components/Tag";

interface CardInfoProps {
  id?: string;
  title: string;
  description: string;
  yearsOfExperience?: string;
  startAndEnd: string;
  status?: boolean;
  onClick?: () => void;
  tags?: Array<string>;
}

const CardInfo = ({
  title,
  description,
  yearsOfExperience,
  startAndEnd,
  status,
  onClick,
  id,
  tags,
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

      <div className="tags">
        {tags?.map((tag, index) => (
          <Tag online={status} key={index} text={tag} />
        ))}
      </div>

      <div className="dates">
        <h5>
          {status && <Pulse />}
          <FormattedMessage id={startAndEnd} />
        </h5>

        {yearsOfExperience && (
          <strong>
            <FormattedMessage id={yearsOfExperience} />
          </strong>
        )}
      </div>
    </Container>
  );
};

export default CardInfo;
