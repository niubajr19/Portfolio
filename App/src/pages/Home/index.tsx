import Header from "../../components/Header";
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Content,
  DescriptionContainer,
  GreatsTitle,
  InfoContainer,
  InfoSubtitle,
  SocialMediaContainer,
  SocialMediasContainer,
  ThumbContainer,
  TitleContainer,
} from "./styles";

import Thumb from "../../assets/thumb.webp";
import { useTheme } from "styled-components";

import Lottie from "react-lottie";

import scrollAnimated from "../../assets/lottie/scroll-down.json";

import GithubImg from "../../assets/social-medias/github.png";
import LinkedinImg from "../../assets/social-medias/linkedin.png";
import InstagramImg from "../../assets/social-medias/instagram.png";

function Home() {
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimated,
  };

  return (
    <Container>
      <Header />
      <Content>
        <InfoContainer>
          <GreatsTitle>Hi, I'm Lucas Antonio</GreatsTitle>
          <InfoSubtitle>
            A front end developer with experiece in React, React Native and
            Angular.
          </InfoSubtitle>
          <Button>
            <ButtonText>Hire Me</ButtonText>
          </Button>
          <SocialMediasContainer>
            <SocialMediaContainer>
              <img src={GithubImg} alt="Github Logo" width={30} height={30} />
            </SocialMediaContainer>
            <SocialMediaContainer>
              <img
                src={LinkedinImg}
                alt="Linkedin Logo"
                width={30}
                height={30}
              />
            </SocialMediaContainer>
            <SocialMediaContainer>
              <img
                src={InstagramImg}
                alt="Instagram Logo"
                width={30}
                height={30}
              />
            </SocialMediaContainer>
          </SocialMediasContainer>
        </InfoContainer>
        <ThumbContainer>
          <div
            style={{
              backgroundColor: "rgba(220, 227, 237, 1)",
              borderRadius: 150,
              width: 300,
              height: 300,
              position: "absolute",
              bottom: "8%",
              left: "35%",
              zIndex: 2,
            }}
          />
          <div
            style={{
              display: "flex",
              backgroundColor: theme.color.support_primary,
              borderRadius: 20,
              width: 300,
              height: 100,
              position: "absolute",
              bottom: "60%",
              right: "15%",
              zIndex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Graduated in INFORMATION SISTEM</p>
          </div>
          <img
            src={Thumb}
            style={{ borderRadius: 300, zIndex: 2, opacity: 0.9 }}
            width={600}
            height={600}
          />
        </ThumbContainer>
        <div style={{ position: "absolute", bottom: "1%", left: -50 }}>
          <Lottie options={defaultOptions} height={150} width={150} />
        </div>
      </Content>
      <div
        style={{
          display: "flex",
          backgroundColor: theme.color.support_primary,
          borderRadius: 20,
          width: 300,
          height: 100,
          position: "absolute",
          bottom: "60%",
          right: "15%",
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Container>
  );
}

export default Home;
