import { X } from "phosphor-react";
import { Container } from "./styles";

interface VideoModalProps {
  videoLink: string;
  setShowVideoModal: any;
}

const VideoModal = ({ videoLink, setShowVideoModal }: VideoModalProps) => {
  function handleClose() {
    setShowVideoModal(false);
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
            allowFullScreen
            src={`${videoLink}?autoplay=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </Container>
  );
};

export default VideoModal;
