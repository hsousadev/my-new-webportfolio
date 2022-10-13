import Logo from "../../../../../shared/assets/icons/logo.svg";

import SectionsButton from "./components/SectionsButton";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container
    >
      <div className="content">
        <img src={Logo} alt="" />
        <SectionsButton />
      </div>
    </Container>
  );
};

export default TopBar;
