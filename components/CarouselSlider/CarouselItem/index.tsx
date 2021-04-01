import React, { ReactNode } from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useLayout } from "hooks/layout";

interface Props {
  children?: ReactNode;
  img_url: string;
  nextSlide(): void;
  prevSlide(): void;
  animation?: "fadeInBottom" | "fadeInCenter";
  currentIndex: number;
  iconSize?: number;
}

interface ChildrenContainerProps {
  animation: Keyframes;
}

interface CarouselItemProps {
  img_url: string;
}

const fadeInBottom = keyframes`
  from {
          opacity: 0;
          transform: translateY(20%);
      }
      to { opacity: 1 }
`;
const fadeInCenter = keyframes`
  from {
        opacity: 0;
        transform: scale(0.6);
    }
    to { opacity: 1;transform:scale(1.0); }
`;

const Container = styled.div<CarouselItemProps>`
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url(${({ img_url }) => img_url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LeftArrow = styled.div`
  height: auto;
  width: auto;
  padding: 0px 1rem;
  cursor: pointer;
  flex: 1;
  transition: transform 0.5s;
  &:hover {
    transform: translateX(-0.5rem);
  }
`;
const RightArrow = styled.div`
  height: auto;
  width: auto;
  padding: 0px 1rem;
  cursor: pointer;
  flex: 1;
  transition: transform 0.5s forwards;
  &:hover {
    transform: translateX(0.5rem);
  }
`;
const ChildrenContainer = styled.div<ChildrenContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 100;
  animation: ${({ animation }) => animation} 1s ease-in;
`;

const CarouselItem = ({
  children,
  img_url,
  nextSlide,
  prevSlide,
  animation = "fadeInBottom",
  currentIndex,
  iconSize = 18,
}: Props) => {
  const { windowWidth } = useLayout();

  const selectAnimation = (type: string) => {
    switch (type) {
      case "fadeInBottom":
        return fadeInBottom;
      case "fadeInCenter":
        return fadeInCenter;
      default:
        return fadeInCenter;
    }
  };

  return (
    <Container img_url={img_url} key={currentIndex}>
      {windowWidth > 1024 && (
        <LeftArrow>
          <BsChevronLeft
            onClick={() => prevSlide()}
            color="white"
            size={iconSize}
          />
        </LeftArrow>
      )}
      <ChildrenContainer animation={selectAnimation(animation)}>
        {children}
      </ChildrenContainer>
      {windowWidth > 1024 && (
        <RightArrow>
          <BsChevronRight
            onClick={() => nextSlide()}
            color="white"
            size={iconSize}
          />
        </RightArrow>
      )}
    </Container>
  );
};

export default CarouselItem;
