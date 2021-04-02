import React, { useState } from "react";
import NavigationItem from "interfaces/Navigation/NavigationItem";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

interface Props {
  navItem: NavigationItem;
  level: number;
}
interface CollapseStyleProps {
  level: number;
}

const CollpasedMenuItemContainer = styled.div<CollapseStyleProps>`
  width: ${({ level }) => 100 - level * 3}%;
  min-height: 38px;
  height: auto;
  padding: 4px 0px;
`;

const CollapseTitle = styled.span`
  color: #a5a5a5;
  font-size: 0.75rem;
  flex-grow: 1;
  &:hover {
    color: #e1be64;
  }
`;

const CollapseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 32px;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: #c5c5c5;
`;

const CollapsedMenu = styled.div`
  transform-origin: top center;
  animation: ${growDown} 300ms ease-in-out forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CollapsedMenuItem = ({ navItem, level }: Props) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => setIsMenuCollapsed(!isMenuCollapsed);

  return (
    <CollpasedMenuItemContainer level={level}>
      <CollapseButton onClick={toggleCollapse}>
        <CollapseTitle>{navItem.name}</CollapseTitle>
        {!!navItem.items?.length ? (
          isMenuCollapsed ? (
            <BiChevronDown />
          ) : (
            <BiChevronRight />
          )
        ) : null}
      </CollapseButton>
      <CollapsedMenu>
        {isMenuCollapsed && (
          <CollapsedMenu>
            {navItem.items?.map((item, index) => (
              <CollapsedMenuItem navItem={item} level={level + 1} key={index} />
            ))}
          </CollapsedMenu>
        )}
      </CollapsedMenu>
    </CollpasedMenuItemContainer>
  );
};

export default CollapsedMenuItem;
