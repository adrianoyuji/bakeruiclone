import React from "react";
import { useLayout } from "hooks/layout";
import { useMenu } from "hooks/menu";
import WindowProps from "interfaces/WindowProps";
import styled from "styled-components";
import CatalogShowcaseItem from "./CatalogShowcaseItem";

const CatalogShowcaseContainer = styled.section<WindowProps>`
  height: auto;
  width: 100%;
  display: grid;
  margin: 1vh 0px;
  grid-template-columns: ${({ windowWidth }) =>
    windowWidth
      ? windowWidth > 1200
        ? "20% 20% 20% 20% 20%"
        : windowWidth > 1024
        ? "25% 25% 25% 25%"
        : windowWidth > 768
        ? "33% 33% 33%"
        : windowWidth > 680
        ? "50% 50%"
        : "100%"
      : "100%"};
  justify-items: center;
`;

const CatalogShowCase = () => {
  const { menu } = useMenu();
  const { windowWidth } = useLayout();

  return (
    <CatalogShowcaseContainer windowWidth={windowWidth}>
      {!!menu.length &&
        menu[0].items.map((item, index) => (
          <CatalogShowcaseItem
            category_name={menu[0].category_name}
            product={item}
            key={index}
          />
        ))}
    </CatalogShowcaseContainer>
  );
};

export default CatalogShowCase;
