import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 90vw;
  height: 100vh;

  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;

  width: 100vw;
  height: 90vh;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;

  height: 95vh;
  width: 35%;

  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  z-index: 1;

  @media (max-width: 1024px) {
    width: 100%;

    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;

  height: 25vh;

  justify-content: center;

  @media (max-width: 1025px) {
    height: 25vh;

    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;

  height: 20%;
  width: 100%;

  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 94px;
`;

export const Button = styled.button`
  display: flex;

  width: 10rem;
  height: 3rem;
  justify-content: center;
  align-items: center;

  background-color: #0d2a4a;

  border: none;
  border-radius: 15px;

  padding: 10px;
`;

export const ButtonText = styled.p`
  font-family: "Poppins";
  font-size: 1.25rem;
  font-weight: 400;

  color: ${({ theme }) => theme.color.background_color};
`;

export const SocialMediasContainer = styled.div`
  display: flex;

  height: 10%;
  width: 40%;

  align-items: flex-start;
  justify-content: space-around;

  margin-top: 136px;
`;

export const ThumbContainer = styled.div`
  display: flex;

  height: 95%;
  width: 70%;

  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 0;
    height: 0;

    display: none;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 4rem;

  min-height: 4rem;
  min-width: 4rem;

  border-radius: 80rem;
  border: 3px solid ${({ theme }) => theme.color.secondary};

  background-color: transparent;
`;

export const SocialMediaImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const GraduatedFloatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18.5rem;
  height: 6.25rem;

  background-color: ${({ theme }) => theme.color.background_color};
  bottom: 60%;
  right: 15%;

  z-index: 1;

  border-radius: 20px;
  box-shadow: 4px 4px 8px 8px ${({ theme }) => theme.color.support_secondary};
`;

export const SchoolIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;

  box-shadow: 3px 3px 6px 6px ${({ theme }) => theme.color.support_secondary};
  background-color: ${({ theme }) => theme.color.background_color};

  padding: 0.2rem;

  position: absolute;

  z-index: 2;

  top: 1vh;
  right: 5%;
`;

export const FloatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 10rem;

  position: absolute;

  bottom: 60vh;
  right: 10%;
`;

export const Circle = styled.div`
  @media (min-width: 1025px) {
    width: 15.6rem;
    height: 15.6rem;

    border-radius: 7.8rem;
    background-color: rgba(220, 227, 237, 1);

    position: absolute;

    top: 18vh;
    left: 18vw;
    z-index: 0;
  }
`;

export const ThumbImg = styled.img`
  width: 40rem;
  height: 40rem;

  border-radius: 20rem;

  z-index: 2;

  opacity: 0.9;
`;

//Info Texts

export const GreatsTitle = styled.p`
  font-family: "Poppins";
  font-size: 3.8rem;
  font-weight: 600;

  text-align: left;

  margin-bottom: 94px;

  @media (max-width: 1025px) {
    text-align: center;
    font-size: 4.5rem;
    margin: 0;

    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const InfoSubtitle = styled.p`
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 600;

  margin-bottom: 94px;
  color: ${({ theme }) => theme.color.text_secondary};
  @media (max-width: 1025px) {
    text-align: center;
  }
`;

export const GraduatedText = styled.p`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color.text_secondary};
`;
