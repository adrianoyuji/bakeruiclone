import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  img_url: string;
  title: string;
  description: string;
}

interface ImageItemProps {
  img_url: string;
}

const fadeInBottom = keyframes`
from {
        opacity: 0;
        transform: translateY(30%);
    }
    to { opacity: 1 }
`;

const ItemContainer = styled.div`
  min-height: 75vh;
  background-color: #333;
  flex: 1;
  margin: 0px 1rem;
  position: relative;
  z-index: 2;
`;

const ImageBackground = styled.div<ImageItemProps>`
  background-image: url(${({ img_url }) => img_url});
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  transition: ease-in-out 0.5s;
`;

const Title = styled.span`
  font-family: "Playfair";
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  z-index: 30;
`;

const Paragraph = styled.span`
  font-size: 0.8rem;
  color: #fff;
  width: 80%;
  text-align: center;
  font-weight: lighter;
  margin-top: 10px;
  z-index: 30;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.5);
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 1;
    span {
      animation: ${fadeInBottom} ease-in-out 0.2s;
    }
  }
`;

const GalleryButton = styled.div`
  color: #fff;
  margin-top: 64px;
  text-align: center;
  z-index: 30;
  border: solid;
  border-width: 1px;
  border-color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 12px 28px;
  font-size: 12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    border: none;
    background-color: #e1be64;
    color: #333;
  }
`;

const GalleryItem = ({ img_url, title, description }: Props) => {
  return (
    <ItemContainer>
      <ImageBackground img_url={img_url}>
        <ContentContainer>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
          <GalleryButton>READ MORE</GalleryButton>
        </ContentContainer>
      </ImageBackground>
    </ItemContainer>
  );
};

export default GalleryItem;
