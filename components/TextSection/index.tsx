import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  paragraph: string;
}

const TextSectionContainer = styled.section`
  padding: 10vh 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: "Playfair";
  font-size: 2.5rem;
  width: 75%;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  width: 75%;
  color: #999;
  text-align: center;
  font-weight: lighter;
  margin-top: 10px;
`;

const TextSection = ({ title, paragraph }: Props) => {
  return (
    <TextSectionContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </TextSectionContainer>
  );
};

export default TextSection;
