import { useLayout } from "hooks/layout";
import React from "react";
import styled from "styled-components";
import WindowProps from "interfaces/WindowProps";

interface Props {
  title: string;
  subtitle: string;
  img_url?: string;
}

interface ContainerProps {
  backgroundImage?: string;
}

const MessageContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 5% 0% 5% 0%;
  margin-bottom: 5%;
  background-image: ${({ backgroundImage }) =>
    `url(${backgroundImage})` || "none"};
  background-position: center;
  background-size: cover;
`;

const Title = styled.span<WindowProps>`
  color: white;
  font-size: ${({ windowWidth }) =>
    windowWidth ? (windowWidth >= 768 ? "3vw" : "5vw") : "8.5vw"};
  font-family: "Playfair Display";
  font-weight: 600;
  text-align: center;
`;
const SubTitle = styled.span`
  color: #c5c5c5;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
`;

const HeaderMessage = ({ title, subtitle, img_url }: Props) => {
  const { windowWidth } = useLayout();
  return (
    <MessageContainer backgroundImage={img_url}>
      <Title windowWidth={windowWidth}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </MessageContainer>
  );
};

export default HeaderMessage;
