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
  ThumbContainer,
  TitleContainer,
} from "./styles";

import Thumb from "../../assets/thumb.webp";
import { useTheme } from "styled-components";

import Lottie from "react-lottie";

import scrollAnimated from "../../assets/lottie/scroll-down.json";

import GithubSvg from "../../assets/social-medias/github.svg";

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
            A front end developer with experiece with React, React Native and
            Angular
          </InfoSubtitle>
          <Button>
            <ButtonText>Hire Me</ButtonText>
          </Button>
          <SocialMediaContainer>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 80,
                backgroundColor: "red",
              }}
            >
              <img src={GithubSvg} alt="Github Logo" />
            </div>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 80,
                backgroundColor: "red",
              }}
            ></div>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 80,
                backgroundColor: "red",
              }}
            ></div>
          </SocialMediaContainer>
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
