import React, { useRef, useState } from "react";
import { useLayout } from "hooks/layout";
import styled from "styled-components";
import { Carousel } from "antd";
import WindowProps from "interfaces/WindowProps";
import CarouselItem from "./CarouselItem";

const CategoryHeader = styled.span<WindowProps>`
  color: white;
  font-size: ${({ windowWidth }) =>
    windowWidth ? (windowWidth >= 768 ? "1.5vw" : "3.5vw") : "2.75vw"};
  text-align: center;
`;
const SubTitle = styled.p<WindowProps>`
  color: white;
  font-size: ${({ windowWidth }) =>
    windowWidth ? (windowWidth >= 768 ? "1.5vw" : "4vw") : "1.66vw"};
  text-align: center;
  width: ${({ windowWidth }) =>
    windowWidth ? (windowWidth >= 768 ? "66%" : "100%") : "88%"}; ;
`;

const Title = styled.span<WindowProps>`
  color: white;
  font-size: ${({ windowWidth }) =>
    windowWidth ? (windowWidth >= 768 ? "7vw" : "9vw") : "8.5vw"};
  font-family: "Playfair Display";
  font-weight: 700;
  text-align: center;
`;

const Button = styled.div<WindowProps>`
  background-color: white;
  color: #333;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 27px;
  box-sizing: border-box;
  letter-spacing: 2px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: #e1be64;
    color: #fff;
  }
`;

const CarouselSlider = () => {
  const carouselRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const { windowWidth } = useLayout();

  const handleNextSlide = () => {
    //@ts-ignore
    carouselRef.current.next();
  };
  const handlePrevSlide = () => {
    //@ts-ignore
    carouselRef.current.prev();
  };

  const handleSlideChange = (current: number) => {
    setCurrentSlideIndex(current);
  };
  return (
    <Carousel
      dotPosition="bottom"
      style={{ height: "80vh", width: "100%" }}
      autoplay
      effect="fade"
      autoplaySpeed={5000}
      ref={carouselRef}
      beforeChange={handleSlideChange}
    >
      <CarouselItem
        nextSlide={handleNextSlide}
        prevSlide={handlePrevSlide}
        iconSize={64}
        currentIndex={currentSlideIndex}
        animation="fadeInCenter"
        img_url="https://cdn.pixabay.com/photo/2015/04/20/13/22/hands-731265_960_720.jpg"
      >
        <img
          alt="baked-with-love"
          src="https://baker.qodeinteractive.com/wp-content/uploads/2017/02/home-7-slider-graphic.png"
          height={windowWidth >= 768 ? "33%" : "66%"}
          width={windowWidth >= 768 ? "33%" : "66%"}
        />
      </CarouselItem>
      <CarouselItem
        nextSlide={handleNextSlide}
        prevSlide={handlePrevSlide}
        iconSize={64}
        animation="fadeInBottom"
        currentIndex={currentSlideIndex}
        img_url="https://cdn.pixabay.com/photo/2015/03/26/10/30/breads-691467_960_720.jpg"
      >
        <CategoryHeader windowWidth={windowWidth}>
          BREAKING BREAD
        </CategoryHeader>
        <Title windowWidth={windowWidth}>Flavorsome Moments</Title>
        <SubTitle windowWidth={windowWidth}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        </SubTitle>
        <Button windowWidth={windowWidth}> PURCHASE NOW </Button>
      </CarouselItem>
      <CarouselItem
        currentIndex={currentSlideIndex}
        nextSlide={handleNextSlide}
        prevSlide={handlePrevSlide}
        iconSize={64}
        animation="fadeInBottom"
        img_url="https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_960_720.jpg"
      >
        <CategoryHeader windowWidth={windowWidth}>
          BREAKING BREAD
        </CategoryHeader>
        <Title windowWidth={windowWidth}>Delightful Alternatives</Title>
        <SubTitle windowWidth={windowWidth}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        </SubTitle>
        <Button> PURCHASE NOW </Button>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselSlider;
