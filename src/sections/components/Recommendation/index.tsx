import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import Tag from "../../../shared/components/Tag";
import CardRecommendation from "./components/CardRecommendation";
import NextButton from "../../../shared/components/NextButton";
import BackButton from "../../../shared/components/BackButton";

import romarioPicture from "../../../shared/assets/person/romario-lima.jpeg";
import marceloPicture from "../../../shared/assets/person/marcelo-guido.jpeg";

import { Container } from "./styles";

const Recommendation = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  const comments = [
    <CardRecommendation
      comment="Henrique é muito engajado, uma pessoa de coração enorme e um ótimo profissional. Alegra as pessoas ao seu redor e se comunica muito bem. Sugere e compartilha coisas com o time recorrentemente, e busca agregar valor, vestindo genuinamente a camiseta da empresa. Foi muito legal trabalhar ao lado do Henrique e acompanhar a sua evolução ao longo dos últimos 19 meses. Merece o mundo!"
      authorPictureUrl="https://avatars.githubusercontent.com/u/43392489?v=4"
      authorName="Silvio Marques"
      position="Tech Lead na Ensinio"
    />,
    <CardRecommendation
      comment="O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!"
      authorPictureUrl={romarioPicture}
      authorName="Romário Lima"
      position="Engenheiro da Computação"
    />,

    <CardRecommendation
      comment="Criativo! Este é o Henrique que trabalhou na SuperGeeks! Estimado pelos alunos e autor de artes como o informativo semanal para os pais, Henrique desenvolveu suas atividades em aulas e oficinas de maneira satisfatória. A habilidade e desenvoltura para conduzir a apresentação dos trabalhos finais dos alunos é algo que merece destaque. Henrique foi um bom colaborador e, no momento, está em busca de sonhos maiores."
      authorPictureUrl={marceloPicture}
      authorName="Me. Marcelo Guido"
      position="Profissional da Educação, Redes e Segurança da Informação"
    />,

    <CardRecommendation
      comment="O Henrique é um cara esforçado, dedicado e objetivo. Ele tem ciência das suas forças e fraquezas, e por causa disso está sempre em buscas de melhorias. Tenho ele como inspiração para se tornar um ótimo profissional."
      authorPictureUrl="https://avatars.githubusercontent.com/u/56457600?v=4"
      authorName="Matheus Campos"
      position="Desenvolvedor Front-end na Ensinio"
    />,

    <CardRecommendation
      comment="Trabalhei com o Henrique logo no começo de sua carreira e sua evolução é bastante grande e contínua. Fruto da sua determinação e curiosidade de agregar diversas ferramentas aos seus projetos e aprendizado. Tanto que depois fui seu cliente, confiei a ele o nascimento de uma marca pois não havia dúvidas quanto a qualidade do seu trabalho."
      authorPictureUrl="https://avatars.githubusercontent.com/u/1855228?v=4"
      authorName="Anderson Brandão"
      position="Head of Engineering na xCoreEng"
    />,
  ];

  return (
    <Container>
      <div className="header">
        <Tag text="💬 Recomendações" />

        {isMobile ? (
          <h1>
            Em <br /> depoimento
          </h1>
        ) : (
          <h1>Em depoimento</h1>
        )}
      </div>

      {!isMobile ? (
        <AliceCarousel
          mouseTracking
          touchTracking
          items={comments}
          renderNextButton={NextButton}
          renderPrevButton={BackButton}
          autoWidth
          autoHeight
          disableDotsControls
          paddingRight={400}
        />
      ) : (
        <div className="cards">
          <div className="content">
            <CardRecommendation
              comment="Henrique é muito engajado, uma pessoa de coração enorme e um ótimo profissional. Alegra as pessoas ao seu redor e se comunica muito bem. Sugere e compartilha coisas com o time recorrentemente, e busca agregar valor, vestindo genuinamente a camiseta da empresa. Foi muito legal trabalhar ao lado do Henrique e acompanhar a sua evolução ao longo dos últimos 19 meses. Merece o mundo!"
              authorPictureUrl="https://avatars.githubusercontent.com/u/43392489?v=4"
              authorName="Silvio Marques"
              position="Tech Lead na Ensinio"
            />
            <CardRecommendation
              comment="O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!"
              authorPictureUrl={romarioPicture}
              authorName="Romário Lima"
              position="Engenheiro da Computação"
            />
            <CardRecommendation
              comment="Criativo! Este é o Henrique que trabalhou na SuperGeeks! Estimado pelos alunos e autor de artes como o informativo semanal para os pais, Henrique desenvolveu suas atividades em aulas e oficinas de maneira satisfatória. A habilidade e desenvoltura para conduzir a apresentação dos trabalhos finais dos alunos é algo que merece destaque. Henrique foi um bom colaborador e, no momento, está em busca de sonhos maiores."
              authorPictureUrl={marceloPicture}
              authorName="Me. Marcelo Guido"
              position="Profissional da Educação, Redes e Segurança da Informação"
            />
            <CardRecommendation
              comment="O Henrique é um cara esforçado, dedicado e objetivo. Ele tem ciência das suas forças e fraquezas, e por causa disso está sempre em buscas de melhorias. Tenho ele como inspiração para se tornar um ótimo profissional."
              authorPictureUrl="https://avatars.githubusercontent.com/u/56457600?v=4"
              authorName="Matheus Campos"
              position="Desenvolvedor Front-end na Ensinio"
            />
            <CardRecommendation
              comment="Trabalhei com o Henrique logo no começo de sua carreira e sua evolução é bastante grande e contínua. Fruto da sua determinação e curiosidade de agregar diversas ferramentas aos seus projetos e aprendizado. Tanto que depois fui seu cliente, confiei a ele o nascimento de uma marca pois não havia dúvidas quanto a qualidade do seu trabalho."
              authorPictureUrl="https://avatars.githubusercontent.com/u/1855228?v=4"
              authorName="Anderson Brandão"
              position="Head of Engineering na xCoreEng"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Recommendation;
