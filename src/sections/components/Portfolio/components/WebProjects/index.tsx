import WorkCard from "../WorkCard";

const WebProjects = () => {
  return (
    <>
      <WorkCard
        title="Nanotícia"
        description="site-that-brings-together"
        tags={["Online", "Beta", "NextJS", "React JS", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png"
        redirectUrl="https://nanoticia.vercel.app/"
        online
        beta
      />
      <WorkCard
        title="Adicionei"
        description="contact-management-web-app"
        tags={["NextJS", "React JS", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/234316093-88e43f19-7a72-4300-b24f-924f1f299457.png"
        redirectUrl="https://github.com/justhenrique/adicionei"
      />
      <WorkCard
        title="Rick And Morty Wiki"
        description="all-about-characters-episodes-and-more"
        tags={["Online", "NextJS", "React JS", "Typescript"]}
        bannerUrl="https://user-images.githubusercontent.com/54003876/229385071-92694ca7-ca83-4c9a-b316-ef3a6b27640a.png"
        redirectUrl="https://rickandmortysite.vercel.app/"
        online
      />
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
    </>
  );
};

export default WebProjects;
