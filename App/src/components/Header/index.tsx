import {
  Button,
  ButtonsContainer,
  ButtonText,
  ContactButton,
  ContactButtonContainer,
  ContactButtonText,
  Container,
  LogoContainer,
  Logo,
} from "./styles";

import LogoLa from "../../assets/logo/logo-no-background.png";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoLa} />
      </LogoContainer>
      <ButtonsContainer>
        <Button>
          <ButtonText>Home</ButtonText>
        </Button>
        <Button>
          <ButtonText>About</ButtonText>
        </Button>
        <Button>
          <ButtonText>Portfolio</ButtonText>
        </Button>
        <Button>
          <ButtonText>Curiousity</ButtonText>
        </Button>
      </ButtonsContainer>
      <ContactButtonContainer>
        <ContactButton>
          <ContactButtonText>Contact Me</ContactButtonText>
        </ContactButton>
      </ContactButtonContainer>
    </Container>
  );
}

export default Header;
