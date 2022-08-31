import styled from "styled-components";
import ButtonUI from "@mui/material/Button";

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

  border-radius: 80rem;
  border: 3px solid ${({ theme }) => theme.color.secondary};

  background-color: transparent;
`;

export const GraduatedFloatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 100px;

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

  position: absolute;
  z-index: 2;
  top: 6%;
  right: 5%;
`;

export const FloatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 10rem;

  position: absolute;

  bottom: 60%;
  right: 10%;
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

export const GraduatedText = styled.p`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color.text_secondary};
`;
