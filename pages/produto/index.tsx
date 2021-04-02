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
    <Layout title="Produto | Baker">
      <Body>
        <Menu />
      </Body>
    </Layout>
  );
};

export default Home;
