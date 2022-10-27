import { FormattedMessage } from "react-intl";
import { Play } from "phosphor-react";

import { Container } from "./styles";

interface VideoCardProps {
  title: string;
  description: string;
  bannerUrl: string;
  videoLink: string;
  setShowVideoModal: any;
  setVideoUrl: any;
}

const VideoCard = ({
  title,
  description,
  bannerUrl,
  videoLink,
  setShowVideoModal,
  setVideoUrl,
}: VideoCardProps) => {
  function handleVideoModal() {
    setShowVideoModal(true);
    setVideoUrl(videoLink);
  }

  return (
    <Container onClick={() => handleVideoModal()}>
      <img src={bannerUrl} alt="" />
      <div className="title-and-tags">
        <h1>
          <FormattedMessage id={title} />
        </h1>
      </div>
      <div className="description">
        <p>
          <FormattedMessage id={description} />
        </p>

        <button className="play-button">
          <FormattedMessage id="click-to-watch" />{" "}
          <Play color="var(--PURPLE)" size={24} />
        </button>
      </div>
    </Container>
  );
};

export default VideoCard;
