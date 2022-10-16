import { X } from "phosphor-react";
import { Container } from "./styles";

interface VideoModalProps {
  videoUrl: string;
  setShowVideo: boolean;
}

const VideoModal = ({ videoUrl, setShowVideo }: VideoModalProps) => {

  function handleClose() {
    console.log("foi");
    setShowVideo = false;
  }

  return (
    <Container>
      <div className="video-container">
        <button onClick={() => handleClose()}>
          <X alt="Fechar vídeo" size={40} color="white" />
        </button>

        <div className="iframe-container">
          <iframe
            title="video"
            frameBorder="0"
            allowFullScreen
            src={`${videoUrl}?autoplay=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </Container>
  );
};

export default VideoModal;
