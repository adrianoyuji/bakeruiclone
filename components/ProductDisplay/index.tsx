import React from "react";
import { useLayout } from "hooks/layout";
import { useMenu } from "hooks/menu";
import WindowProps from "interfaces/WindowProps";
import styled from "styled-components";
import ProductDisplayItem from "./ProductDisplayItem";

const DisplayContainer = styled.section<WindowProps>`
  height: auto;
  width: 100%;
  display: grid;
  margin: 10vh 0px;
  grid-template-columns: ${({ windowWidth }) =>
    windowWidth
      ? windowWidth < 768
        ? "100%"
        : windowWidth < 990
        ? "50% 50%"
        : "25% 25% 25% 25%"
      : "100%"};
  justify-items: center;
`;

const ProductDisplay = () => {
  const { menu } = useMenu();
  const { windowWidth } = useLayout();

  return (
    <DisplayContainer windowWidth={windowWidth}>
      {menu.map((category) => (
        <ProductDisplayItem key={category.id} product={category.items[0]} />
      ))}
    </DisplayContainer>
  );
};

export default ProductDisplay;
