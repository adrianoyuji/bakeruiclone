import React from "react";
import styled from "styled-components";
import WindowProps from "interfaces/WindowProps";
import { useLayout } from "hooks/layout";
import GalleryItem from "./GalleryItem";

const ImageGalleryContainer = styled.section<WindowProps>`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: ${({ windowWidth }) =>
    windowWidth ? (windowWidth < 768 ? "column" : "row") : "column"};
  flex: 1;
  padding: 6vh 0px;
`;

const GalleryItems = [
  {
    img_url:
      "https://cdn.pixabay.com/photo/2015/04/20/13/22/hands-731265_960_720.jpg",
    title: "Chabatte Petite",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_960_720.jpg",
    title: "For a sweet treat",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2015/03/26/10/30/breads-691467_960_720.jpg",
    title: "French baguette",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut",
  },
];

const ImageGallery = () => {
  const { windowWidth } = useLayout();

  return (
    <ImageGalleryContainer windowWidth={windowWidth}>
      {GalleryItems.map((galleryItem, index) => (
        <GalleryItem
          key={index}
          img_url={galleryItem.img_url}
          title={galleryItem.title}
          description={galleryItem.description}
        />
      ))}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
