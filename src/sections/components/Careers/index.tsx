import useWindowSize from "../../../shared/hooks/useWindowSize";

import Tag from "../../../shared/components/Tag";
import CardInfo from "./components/CardInfo";

import { Container } from "./styles";

const Careers = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container>
      <Tag text="💼 Carreira" />

      {isMobile ? (
        <h1>
          Trajetória <br /> até aqui
        </h1>
      ) : (
        <h1>Trajetória até aqui</h1>
      )}

      <div className="columns">
        <div className="column">
          <h1>Área profissional</h1>
          <h3>2016 · Atualmente</h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                title="Desenvolvedor Front-end na Ensinio"
                description="Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura."
                yearsOfExperience="1 ano e 7 meses"
                startAndEnd="Abril/2021 · Atualmente"
              />
              <CardInfo
                title="Designer na Viralizzi"
                description="Disponibilizando serviços para mídias digitais na Viralizzi como Designer."
                yearsOfExperience="3 meses"
                startAndEnd="Janeiro/2021 · Abril/2021"
              />
              <CardInfo
                title="Instrutor de programação na SuperGeeks"
                description="Atuando como instrutor de programação, ciência da computação e desenvolvimento de jogos com crianças e adolescentes. Além de suporte para criação de conteúdos e mídias digitais."
                yearsOfExperience="1 ano e 11 meses"
                startAndEnd="Fevereiro/2019 · Janeiro/2021"
              />
              <CardInfo
                title="Designer, editor e suporte em hardwares na Alorean"
                description="Serviços freelancers de design, manutenção de hardwares, edições de mídias digitais e gráficas para empresas e pessoas da região de São José dos Campos e Jacareí pela marca  própria “Alorean”. "
                yearsOfExperience="1 ano"
                startAndEnd="Janeiro/2020 · Janeiro/2021"
              />
              <CardInfo
                title="Jovem aprendiz"
                description="No fim de 2016 iniciei em fase de experiência, no inicio de 2017 já como Aprendiz atuando no setor de criação, desenvolvimento e design. Suporte ao marketing digital da empresa e TI."
                yearsOfExperience="1 ano e 3 meses"
                startAndEnd="Outubro/2016 · Dezembro/2017"
              />
            </div>
          </div>
        </div>

        <div className="column">
          <h1>Área acadêmica</h1>
          <h3>2015 · Atualmente</h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                title="Superior, Análise e Desenvolvimento de Sistemas"
                description="Recém graduado pela FATEC de São José dos Campos no curso de Análise e Desenvolvimento de Sistemas."
                yearsOfExperience="3 anos"
                startAndEnd="Agosto/2019 · Agosto/2022"
              />
              <CardInfo
                title="Técnico, Redes de Computadores"
                description="Em 2019 me formei em técnico de Redes de Computadores pela ETEC Cônego José Bento em Jacareí. "
                yearsOfExperience="1 ano e 6 meses"
                startAndEnd="Fevereio/2018 · Junho/2019"
              />
              <CardInfo
                title="Inglês · Conversação avançada"
                description="No segundo semestre de 2018 pude aprimorar meu nível de inglês (Hoje: Avançado) com 6 meses de conversação avançada pelo Instituto Federal de Jacareí (IFSP)"
                yearsOfExperience="6 meses"
                startAndEnd="Julho/2018 · Dezembro/2018"
              />
              <CardInfo
                title="Ensinio médio completo"
                description="Ao final de 2017 me formei no ensino médio na escola Amância Dias Sampaio em Jacareí."
                yearsOfExperience=""
                startAndEnd="Janeiro/2015 · Dezembro/2017"
              />
              <CardInfo
                title="Informática Avançada"
                description="Em novembro de 2017 me certifiquei em informática avançada pelo Instituto Educacional Iraci Veiga"
                yearsOfExperience="8 meses"
                startAndEnd="Fevereiro/2017 · Novembro/2017"
              />
              <CardInfo
                title="Informática Profissionalizante"
                description="Ao final de 2016 me certifiquei em informática profissionalizante pelo Instituto Educacional Iraci Veiga"
                yearsOfExperience="1 ano 3 meses"
                startAndEnd="Outubro/2015 · Dezembro/2016"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careers;
