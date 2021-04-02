import { useLayout } from "hooks/layout";
import { useMenu } from "hooks/menu";
import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import WindowProps from "interfaces/WindowProps";

const MenuContainer = styled.div<WindowProps>`
  height: auto;
  width: 100%;
  padding: ${({ windowWidth }) =>
    windowWidth ? (windowWidth < 768 ? " 5% 1%" : "5% 7.5%") : "5% 7.5%%"};
  display: grid;
  grid-template-columns: ${({ windowWidth }) =>
    windowWidth
      ? windowWidth > 1500
        ? "25% 25% 25% 25%"
        : windowWidth > 1024
        ? "33% 33% 33%"
        : windowWidth > 660
        ? "50% 50%"
        : "100%"
      : "100%"};
  justify-items: center;
`;

const Menu = () => {
  const { menu } = useMenu();
  const { windowWidth } = useLayout();
  return (
    <MenuContainer windowWidth={windowWidth}>
      {menu.map((category) =>
        category.items.map((item) => (
          <MenuItem
            product={item}
            category_name={category.category_name}
            key={item.id}
          />
        ))
      )}
    </MenuContainer>
  );
};

export default Menu;
