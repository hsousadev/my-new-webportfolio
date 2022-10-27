import { FormattedMessage } from "react-intl";
import { Container } from "./styles";

interface CardInfoProps {
  title: string;
  description: string;
  yearsOfExperience?: string;
  startAndEnd: string;
}

const CardInfo = ({
  title,
  description,
  yearsOfExperience,
  startAndEnd,
}: CardInfoProps) => {
  return (
    <Container>
      <div className="title-and-description">
        <h4>
          <FormattedMessage id={title} />
        </h4>
        <p>
          <FormattedMessage id={description} />
        </p>
      </div>

      <div className="dates">
        {/* <strong><FormattedMessage id={yearsOfExperience}/></strong> */}

        <h5>
          <FormattedMessage id={startAndEnd} />
        </h5>
      </div>
    </Container>
  );
};

export default CardInfo;
