import Logo from "../../../../../shared/assets/icons/logo.svg";

import SectionsButton from "./components/SectionsButton";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
      <SectionsButton />
    </Container>
  );
};

export default TopBar;
