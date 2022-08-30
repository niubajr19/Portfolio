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

function Home() {
  const theme = useTheme();
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
            ></div>
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
              zIndex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Graduated in INFORMATION SISTEM</p>
          </div>
          <img
            src={Thumb}
            style={{ borderRadius: 150, zIndex: 1 }}
            width={600}
          />
        </ThumbContainer>
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
