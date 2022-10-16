import { Container } from "./styles";

import VideoCard from "./components/VideoCard";

const ProjectsWithVideos = () => {
  return (
    <Container>
      <div className="header">
        <h1>Projetos em vídeos</h1>
        <h4>Sempre é bom saber um pouquinho de edição</h4>
      </div>
      <div className="video-cards">
        <VideoCard
          title="eSports"
          description="eSports"
          tags={["React JS", "React Native"]}
          bannerUrl="https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png"
          videoLink="https://www.youtube.com/embed/hQMvhnpsWpU"
        />
        <VideoCard
          title="eSports"
          description="eSports"
          tags={["React JS", "React Native"]}
          bannerUrl="https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png"
          videoLink="https://www.youtube.com/embed/vIIeVExmZiM"
        />
        <VideoCard
          title="eSports"
          description="eSports"
          tags={["React JS", "React Native"]}
          bannerUrl="https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png"
          videoLink="https://www.youtube.com/embed/65Go1Nz3KBA"
        />
        <VideoCard
          title="eSports"
          description="eSports"
          tags={["React JS", "React Native"]}
          bannerUrl="https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png"
          videoLink="https://www.youtube.com/embed/LraPykzShIA"
        />
      </div>
    </Container>
  );
};

export default ProjectsWithVideos;
