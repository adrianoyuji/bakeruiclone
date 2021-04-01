import React from "react";
import styled from "styled-components";
import CarouselSlider from "components/CarouselSlider";
import Layout from "components/Layout";
import ProductDisplay from "components/ProductDisplay";
import OwnerDescription from "components/OwnerDescription";
import TextSection from "components/TextSection";
import ImageGallery from "components/ImageGallery";
import CatalogShowcase from "components/CatalogShowcase";

const Body = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
`;

const Home = () => {
  return (
    <Layout
      title="Home | Baker"
      styles={{ paddingLeft: "2.7%", paddingRight: "2.7%" }}
    >
      <Body>
        <CarouselSlider />
        <ProductDisplay />
        <OwnerDescription />
        <TextSection
          title="Unspeakably Good"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
        <ImageGallery />
        <TextSection
          title="Delivering to your door"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
        <CatalogShowcase />
      </Body>
    </Layout>
  );
};

export default Home;
