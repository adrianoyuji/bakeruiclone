import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Menu from "components/Menu";

const Body = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
`;

const Home = () => {
  return (
    <Layout
      title="Produto | Baker"
      logoColor="white"
      headerImageBackgroundContainer={{
        image_url:
          "https://cdn.pixabay.com/photo/2014/12/29/23/26/bar-583403_960_720.jpg",
        title: "Gallery Four Columns",
        subtitle: "Experienced and Friendly",
      }}
      attachFooter
    >
      <Body>
        <Menu />
      </Body>
    </Layout>
  );
};

export default Home;
