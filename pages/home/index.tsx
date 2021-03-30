import React, { useRef, useState } from "react";
import Layout from "components/Layout";
import { Carousel } from "antd";
import styled from "styled-components";
import CarouselItem from "components/CarouselItem";

const Body = styled.div`
  height: 100vw;
  width: 100%;
  background-color: white;
`;

const CategoryHeader = styled.span`
  color: white;
  font-size: 1.1em;
  text-align: center;
`;
const SubTitle = styled.p`
  color: white;
  font-size: 1.2em;
  text-align: center;
  width: 60%;
`;

const Title = styled.span`
  color: white;
  font-size: 7em;
  font-family: "Playfair Display";
  font-weight: bold;
  text-align: center;
`;

const Button = styled.div`
  background-color: white;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  line-height: 27px;
  box-sizing: border-box;
  letter-spacing: 2px;
  padding: 13px 35px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: #e1be64;
    color: #fff;
  }
`;

const Home = () => {
  const carouselRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

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
    <Layout
      title="Home | Baker"
      styles={{ paddingLeft: "2.7%", paddingRight: "2.7%" }}
    >
      <Body>
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
              src="https://baker.qodeinteractive.com/wp-content/uploads/2017/02/home-7-slider-graphic.png"
              height="33%"
              width="33%%"
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
            <CategoryHeader>BREAKING BREAD</CategoryHeader>
            <Title>Flavorsome Moments</Title>
            <SubTitle>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae
            </SubTitle>
            <Button> PURCHASE NOW </Button>
          </CarouselItem>
          <CarouselItem
            currentIndex={currentSlideIndex}
            nextSlide={handleNextSlide}
            prevSlide={handlePrevSlide}
            iconSize={64}
            animation="fadeInBottom"
            img_url="https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_960_720.jpg"
          >
            <CategoryHeader>BREAKING BREAD</CategoryHeader>
            <Title>Delightful Alternatives</Title>
            <SubTitle>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae
            </SubTitle>
            <Button> PURCHASE NOW </Button>
          </CarouselItem>
        </Carousel>
      </Body>
    </Layout>
  );
};

export default Home;
