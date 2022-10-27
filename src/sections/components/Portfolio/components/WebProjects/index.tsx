import WorkCard from "../WorkCard";

const WebProjects = () => {
  return (
    <>
      <WorkCard
        title="Move.it"
        description="nlw-04-rocketseat"
        tags={["Online", "React JS", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/108790703-226de300-755c-11eb-9590-f958ff60c91d.png"
        redirectUrl="https://moveit-beta-gold.vercel.app/"
        online
      />
      <WorkCard
        title="OneCar"
        description="web-and-mobile-app-for-car-sales-ads"
        tags={["React JS", "React Native", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png"
        redirectUrl="https://github.com/OneCar-API"
      />
      <WorkCard
        title="eSports"
        description="nlw-esports-rocketseat"
        tags={["React JS", "React Native", "Node"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png"
        redirectUrl="https://github.com/justhenrique/esports-nlw-rocketseat"
      />
      <WorkCard
        title="CarsOn"
        description="web-app-for-car-sales-and-purchases"
        tags={["React JS", "Typescript", "Node"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/133915603-84a02ac8-f7a3-4c90-bca8-dca231fe6778.png"
        redirectUrl="https://github.com/Cars-on"
      />
      <WorkCard
        title="LetMeAsk"
        description="nlw-05-rocketseat"
        tags={["React JS", "Typescript", "SCSS"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/126014850-8c0dc36e-8aeb-4d1a-84c0-9a1c1e20c128.png"
        redirectUrl="https://github.com/justhenrique/esports-nlw-rocketseat"
      />
      <WorkCard
        title="VisGeo"
        description="etl-web-app"
        tags={["React JS", "React Native", "Node"]}
        bannerUrl="https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png"
        redirectUrl="https://github.com/justhenrique/VisGeo-ETL"
      />
      <WorkCard
        title="Proffy"
        description="nlw-02-rocketseat"
        tags={["HTML", "CSS", "Express", "Sqlite3"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/107502115-07bc6700-6b77-11eb-8e13-58c757a4ec94.png"
        redirectUrl="https://github.com/justhenrique/proffy"
      />
      <WorkCard
        title="Ecoleta"
        description="nlw-01-rocketseat"
        tags={["HMTL", "CSS", "Express", "Sqlite3"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/89297367-18c17400-d63a-11ea-807c-811c0ce82f47.png"
        redirectUrl="https://github.com/justhenrique/esports-nlw-rocketseat"
      />
    </>
  );
};

export default WebProjects;
