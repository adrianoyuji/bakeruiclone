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
    windowWidth ? (windowWidth < 768 ? " 0px 1%" : "0px 7.5%") : "0px 7.5%%"};
  display: grid;
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
