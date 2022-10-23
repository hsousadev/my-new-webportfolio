import TagSection from "../../../shared/components/TagSection";
import profilePic from "../../../shared/assets/illustrations/profile-pic.png";

import { Container } from "./styles";

const AboutMe = () => {
  return (
    <Container id="aboutMe">
      <img src={profilePic} alt="" />

      <div className="description">
        <TagSection text="🧐 Sobre mim" />

        <h1>
          Washington Henrique <br /> Fernandes de Sousa
        </h1>

        <p>
          👋 Hello world, pode me chamar apenas de Henrique. Prazer! <br />
          <br />
          👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
          JavaScript, React JS e Typescript. <br />
          🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São
          José dos Campos. <br />
          💡 Interesses em desenvolvimento Front-end com React, React Native,
          VueJS e UX/UI Design. <br />
          <br />
          🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
