import Header from "../../components/Header";

import {
  Button,
  ButtonText,
  Circle,
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
  SocialMediaImg,
  SocialMediasContainer,
  ThumbContainer,
  ThumbImg,
  TitleContainer,
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
          <TitleContainer>
            <GreatsTitle>Hi, I'm Lucas Antonio</GreatsTitle>
          </TitleContainer>
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
                <SocialMediaImg src={GithubImg} alt="Github Logo" />
              </ButtonUI>
            </SocialMediaContainer>

            <SocialMediaContainer>
              <ButtonUI
                href="https://www.linkedin.com/in/lucas-antonio-silva/"
                color="secondary"
                target={"_blank"}
              >
                <SocialMediaImg src={LinkedinImg} alt="Linkedin Logo" />
              </ButtonUI>
            </SocialMediaContainer>
            <SocialMediaContainer>
              <ButtonUI
                href="https://github.com/niubajr19"
                color="secondary"
                target={"_blank"}
              >
                <SocialMediaImg src={InstagramImg} alt="Instagram Logo" />
              </ButtonUI>
            </SocialMediaContainer>
          </SocialMediasContainer>
        </InfoContainer>
        <ThumbContainer>
          <Circle />
          <FloatContainer>
            <SchoolIconContainer>
              <MdSchool color={theme.color.primary} size={40} />
            </SchoolIconContainer>
            <GraduatedFloatContainer>
              <GraduatedText>Graduated in INFORMATION SISTEM</GraduatedText>
            </GraduatedFloatContainer>
          </FloatContainer>

          <ThumbImg src={Thumb} />
        </ThumbContainer>
        <div style={{ position: "absolute", bottom: "1%", left: 10 }}>
          <Lottie options={defaultOptions} height={150} width={150} />
        </div>
      </Content>
    </Container>
  );
}

export default Home;
