import { useState } from "react";
import { FormattedMessage } from "react-intl";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import useWindowSize from "../../../../../shared/hooks/useWindowSize";

import NextButton from "../../../../../shared/components/NextButton";
import BackButton from "../../../../../shared/components/BackButton";

import { Container } from "./styles";

import VideoCard from "./components/VideoCard";
import VideoModal from "../../../../../shared/components/VideoModal";

const ProjectsWithVideos = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;
  const [showVideoModal, setShowVideoModal] = useState<any>(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videosCard = [
    <VideoCard
      title="VisGeo"
      description="application-pitch"
      bannerUrl="https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png"
      videoLink="https://www.youtube.com/embed/hQMvhnpsWpU"
      setShowVideoModal={setShowVideoModal}
      setVideoUrl={setVideoUrl}
    />,
    <VideoCard
      title="UDA Brasil"
      description="application-pitch"
      bannerUrl="https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png"
      videoLink="https://www.youtube.com/embed/vIIeVExmZiM"
      setShowVideoModal={setShowVideoModal}
      setVideoUrl={setVideoUrl}
    />,
    <VideoCard
      title="Typext"
      description="application-pitch"
      bannerUrl="https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png"
      videoLink="https://www.youtube.com/embed/65Go1Nz3KBA"
      setShowVideoModal={setShowVideoModal}
      setVideoUrl={setVideoUrl}
    />,
    <VideoCard
      title="OneCar"
      description="application-pitch"
      bannerUrl="https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png"
      videoLink="https://www.youtube.com/embed/LraPykzShIA"
      setShowVideoModal={setShowVideoModal}
      setVideoUrl={setVideoUrl}
    />,
  ];

  return (
    <>
      {showVideoModal ? (
        <VideoModal
          videoLink={videoUrl}
          setShowVideoModal={setShowVideoModal}
        />
      ) : (
        <Container>
          <div className="header">
            {isMobile ? (
              <h1>
                <FormattedMessage id="projects" /> <br />{" "}
                <FormattedMessage id="with-videos" />
              </h1>
            ) : (
              <h1>
                <FormattedMessage id="projects" />{" "}
                <FormattedMessage id="with-videos" />
              </h1>
            )}

            <h4>
              <FormattedMessage id="its-always-good-to-know-a-little-editing" />
            </h4>
          </div>

          {isMobile ? (
            <div className="video-cards">
              <div className="content">
                <VideoCard
                  title="VisGeo"
                  description="application-pitch"
                  bannerUrl="https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png"
                  videoLink="https://www.youtube.com/embed/hQMvhnpsWpU"
                  setShowVideoModal={setShowVideoModal}
                  setVideoUrl={setVideoUrl}
                />
                <VideoCard
                  title="UDA Brasil"
                  description="application-pitch"
                  bannerUrl="https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png"
                  videoLink="https://www.youtube.com/embed/vIIeVExmZiM"
                  setShowVideoModal={setShowVideoModal}
                  setVideoUrl={setVideoUrl}
                />
                <VideoCard
                  title="Typext"
                  description="application-pitch"
                  bannerUrl="https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png"
                  videoLink="https://www.youtube.com/embed/65Go1Nz3KBA"
                  setShowVideoModal={setShowVideoModal}
                  setVideoUrl={setVideoUrl}
                />
                <VideoCard
                  title="OneCar"
                  description="application-pitch"
                  bannerUrl="https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png"
                  videoLink="https://www.youtube.com/embed/LraPykzShIA"
                  setShowVideoModal={setShowVideoModal}
                  setVideoUrl={setVideoUrl}
                />
              </div>
            </div>
          ) : (
            <AliceCarousel
              mouseTracking
              touchTracking
              items={videosCard}
              renderNextButton={NextButton}
              renderPrevButton={BackButton}
              autoWidth
              autoHeight
              disableDotsControls
              paddingRight={400}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default ProjectsWithVideos;
