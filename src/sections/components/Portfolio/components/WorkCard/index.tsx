import { FormattedMessage } from "react-intl";

import Tag from "../../../../../shared/components/Tag";

import { Container } from "./styles";

interface WorkCardProps {
  title: string;
  description: string;
  tags: Array<string>;
  bannerUrl: string;
  redirectUrl: string;
  online?: boolean;
}

const WorkCard = ({
  title,
  description,
  tags,
  bannerUrl,
  redirectUrl,
  online,
}: WorkCardProps) => {
  return (
    <Container onClick={() => window.open(`${redirectUrl}`)}>
      <div className="content">
        <div className="info">
          <h5>
            <FormattedMessage id={title} />
          </h5>
          <p>
            <FormattedMessage id={description} />
          </p>
        </div>

        <div className="tags-and-banner">
          <div className="tags">
            {tags.map((tag, index) =>
              tag === "Online" ? (
                <Tag key={index} text={tag} online={online} />
              ) : (
                <Tag key={index} text={tag} />
              )
            )}
          </div>
          <img src={bannerUrl} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default WorkCard;
