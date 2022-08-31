import Header from "../../components/Header";

import {
  Button,
  ButtonText,
  Container,
  Content,
  FloatContainer,
  GraduatedFloatContainer,
  GraduatedText,
  GreatsTitle,
  InfoContainer,
  InfoSubtitle,
  SchoolIconContainer,
  SocialMediaContainer,
  SocialMediasContainer,
  ThumbContainer,
} from "./styles";

import Thumb from "../../assets/thumb.webp";
import { useTheme } from "styled-components";

import Lottie from "react-lottie";

import scrollAnimated from "../../assets/lottie/scroll-down.json";

import GithubImg from "../../assets/social-medias/github.png";
import LinkedinImg from "../../assets/social-medias/linkedin.png";
import InstagramImg from "../../assets/social-medias/instagram.png";

import { MdSchool } from "react-icons/md";

import ButtonUI from "@mui/material/IconButton";

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
              <ButtonUI
                href="https://github.com/niubajr19"
                color="secondary"
                target={"_blank"}
              >
                <img src={GithubImg} alt="Github Logo" width={30} height={30} />
              </ButtonUI>
            </SocialMediaContainer>

            <SocialMediaContainer>
              <ButtonUI
                href="https://www.linkedin.com/in/lucas-antonio-silva/"
                color="secondary"
                target={"_blank"}
              >
                <img
                  src={LinkedinImg}
                  alt="Linkedin Logo"
                  width={30}
                  height={30}
                />
              </ButtonUI>
            </SocialMediaContainer>
            <SocialMediaContainer>
              <ButtonUI
                href="https://github.com/niubajr19"
                color="secondary"
                target={"_blank"}
              >
                <img
                  src={InstagramImg}
                  alt="Instagram Logo"
                  width={30}
                  height={30}
                />
              </ButtonUI>
            </SocialMediaContainer>
          </SocialMediasContainer>
        </InfoContainer>
        <ThumbContainer>
          <div
            style={{
              backgroundColor: "rgba(220, 227, 237, 1)",
              borderRadius: 150,
              width: 250,
              height: 250,
              position: "absolute",
              top: "15%",
              left: "15%",
              zIndex: 0,
            }}
          />
          <FloatContainer>
            <SchoolIconContainer>
              <MdSchool color={theme.color.primary} size={40} />
            </SchoolIconContainer>
            <GraduatedFloatContainer>
              <GraduatedText>Graduated in INFORMATION SISTEM</GraduatedText>
            </GraduatedFloatContainer>
          </FloatContainer>

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
    </Container>
  );
}

export default Home;
