import { Play } from "phosphor-react";
import { useEffect, useState } from "react";
import Tag from "../../../../../../../shared/components/Tag";
import VideoModal from "../../../../../../../shared/components/VideoModal";
import { Container } from "./styles";

interface VideoCardProps {
  title: string;
  description: string;
  bannerUrl: string;
  tags: Array<string>;
  videoLink: string;
}

const VideoCard = ({
  title,
  description,
  bannerUrl,
  tags,
  videoLink,
}: VideoCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    videoLink
  );

  function handleVideoClick() {
    setShowVideo(true);
    setVideoUrl(videoLink);
  }
  return (
    <Container onClick={() => handleVideoClick()}>
      {showVideo && videoLink && <VideoModal videoUrl={videoUrl} setShowVideo={showVideo} />}
      <img src={bannerUrl} alt="" />
      <div className="title-and-tags">
        <h1>{title}</h1>
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </div>
      </div>
      <div className="description">
        <p>{description}</p>

        <button className="play-button">
          Clique para assistir <Play color="var(--PURPLE)" size={24} />
        </button>
      </div>
    </Container>
  );
};

export default VideoCard;
