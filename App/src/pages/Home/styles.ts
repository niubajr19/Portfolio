import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 90vw;
  height: 100vh;

  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;

  width: 100%;
  height: 90%;

  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;

  height: 95%;
  width: 35%;

  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;

  height: 20%;

  justify-content: center;
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
  width: 35%;

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
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.1rem;
  width: 3.1rem;

  border-radius: 1.6rem;
  border: 3px solid ${({ theme }) => theme.color.secondary};
`;

//Info Texts

export const GreatsTitle = styled.p`
  font-family: "Poppins";
  font-size: 3.8rem;
  font-weight: 600;

  text-align: left;

  margin-bottom: 94px;
`;

export const InfoSubtitle = styled.p`
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 600;

  margin-bottom: 94px;
  color: ${({ theme }) => theme.color.text_secondary};
`;
