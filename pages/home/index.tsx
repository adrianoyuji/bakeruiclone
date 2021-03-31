import React from "react";
import styled from "styled-components";
import CarouselSlider from "components/CarouselSlider";
import Layout from "components/Layout";
import ProductDisplay from "components/ProductDisplay";

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
      </Body>
    </Layout>
  );
};

export default Home;
