import useWindowSize from "../../../../../shared/hooks/useWindowSize";
import { Container } from "./styles";

import VideoCard from "./components/VideoCard";

const ProjectsWithVideos = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container>
      <div className="header">
        {isMobile ? (
          <h1>
            Projetos <br /> em vídeos
          </h1>
        ) : (
          <h1>Projetos em vídeos</h1>
        )}

        <h4>Sempre é bom saber um pouquinho de edição</h4>
      </div>
      <div className="video-cards">
        <VideoCard
          title="VisGeo"
          description="Pitch da aplicação"
          bannerUrl="https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png"
          videoLink="https://www.youtube.com/embed/hQMvhnpsWpU"
        />
        <VideoCard
          title="UDA Brasil"
          description="Pitch da aplicação"
          bannerUrl="https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png"
          videoLink="https://www.youtube.com/embed/vIIeVExmZiM"
        />
        <VideoCard
          title="Typext"
          description="Pitch da aplicação"
          bannerUrl="https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png"
          videoLink="https://www.youtube.com/embed/65Go1Nz3KBA"
        />
        <VideoCard
          title="OneCar"
          description="Pitch da aplicação"
          bannerUrl="https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png"
          videoLink="https://www.youtube.com/embed/LraPykzShIA"
        />
      </div>
    </Container>
  );
};

export default ProjectsWithVideos;
