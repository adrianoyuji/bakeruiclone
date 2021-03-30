import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

const Body = styled.div`
  height: 100vw;
  width: 100%;
  background-color: white;
`;

const Home = () => {
  return (
    <Layout
      title="Home | Baker"
      styles={{ paddingLeft: "2.7%", paddingRight: "2.7%" }}
    >
      <Body>Placeholder</Body>
    </Layout>
  );
};

export default Home;
