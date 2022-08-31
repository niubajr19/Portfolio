import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 10%;
`;

export const LogoContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonsContainer = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: transparent;

  min-width: 10rem;
  padding: 10px;

  border: none;
`;

export const ButtonText = styled.p`
  font-family: "Poppins";
  font-size: 1.15rem;
  font-weight: 700;

  text-align: left;
`;

export const ContactButtonContainer = styled.div`
  display: flex;

  width: 20%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  min-width: 10rem;

  background-color: transparent;

  border: 3px solid #a4bad2;
  border-radius: 15px;

  padding: 3px;
`;

export const ContactButtonText = styled.p`
  font-family: "Poppins";
  font-size: 1.25rem;
  font-weight: 400;
`;
