import { useLayout } from "hooks/layout";
import React from "react";
import styled from "styled-components";
import WindowProps from "interfaces/WindowProps";

const OwnerDescriptionContainer = styled.section<WindowProps>`
  display: flex;
  height: auto;
  flex-direction: ${({ windowWidth }) =>
    windowWidth ? (windowWidth < 768 ? "column" : "row") : "column"};
  flex: 1;
  background-color: #f5f5f5;
  padding: 6vh 0px;
`;

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding-left: 10%;
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0px 10%;
`;

const SectionTitle = styled.span`
  font-family: "Playfair";
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-align: left;
`;

const SectionParagraph = styled.p`
  font-size: 1rem;
  color: #999;
  font-weight: lighter;
  text-align: left;
  margin-top: 10px;
`;

const Signature = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: contain;
`;

const ChefPicture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const OwnerDescription = () => {
  const { windowWidth } = useLayout();

  return (
    <OwnerDescriptionContainer windowWidth={windowWidth}>
      <FirstSection>
        <SectionTitle>Our chef d’oeuvre … yummie!</SectionTitle>
        <SectionParagraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          tincidunt ut laoreet dolore magna aliquam erat volutpat lorem
        </SectionParagraph>
        <SectionParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </SectionParagraph>
        <Signature src="https://baker.qodeinteractive.com/wp-content/uploads/2017/02/h6-img-1.png" />
      </FirstSection>
      <SecondSection>
        <ChefPicture src="https://baker.qodeinteractive.com/wp-content/uploads/2017/02/home-7-image-1.png" />
      </SecondSection>
    </OwnerDescriptionContainer>
  );
};

export default OwnerDescription;
