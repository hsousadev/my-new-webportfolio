import { useEffect, useState } from "react";

import { Play } from "phosphor-react";

import VideoModal from "../../../../../../../shared/components/VideoModal";

import { Container } from "./styles";

interface VideoCardProps {
  title: string;
  description: string;
  bannerUrl: string;
  videoLink: string;
}

const VideoCard = ({
  title,
  description,
  bannerUrl,
  videoLink,
}: VideoCardProps) => {
  const [showVideoModal, setShowVideoModal] = useState<any>(false);

  function handleVideoModal() {
    setShowVideoModal(true);
  }

  return (
    <>
      {showVideoModal ? (
        <VideoModal
          videoLink={videoLink}
          setShowVideoModal={setShowVideoModal}
        />
      ) : (
        <Container onClick={() => handleVideoModal()}>
          <img src={bannerUrl} alt="" />
          <div className="title-and-tags">
            <h1>{title}</h1>
          </div>
          <div className="description">
            <p>{description}</p>

            <button className="play-button">
              Clique para assistir <Play color="var(--PURPLE)" size={24} />
            </button>
          </div>
        </Container>
      )}
    </>
  );
};

export default VideoCard;
