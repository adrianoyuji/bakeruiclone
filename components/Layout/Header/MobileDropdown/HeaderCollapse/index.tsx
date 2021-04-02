import React, { useState } from "react";
import Navigation from "interfaces/Navigation";
import CollapsedMenuItem from "../CollapsedMenuItem";
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
  navList: Navigation;
  level: number;
}

interface CollapseStyleProps {
  level: number;
}

const CollapseContainer = styled.div<CollapseStyleProps>`
  width: ${({ level }) => 100 - level * 3}%;
  min-height: 38px;
  height: auto;
  padding: 0px 10%;
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
  display: flex;
  transform-origin: top center;
  animation: ${growDown} 300ms ease-in-out forwards;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderCollapse = ({ navList, level }: Props) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => setIsMenuCollapsed(!isMenuCollapsed);

  return (
    <CollapseContainer level={level}>
      <CollapseButton onClick={toggleCollapse}>
        <CollapseTitle>{navList.title}</CollapseTitle>
        {isMenuCollapsed ? <BiChevronDown /> : <BiChevronRight />}
      </CollapseButton>
      {isMenuCollapsed && (
        <CollapsedMenu>
          {navList.items.map((navItem, index) => (
            <CollapsedMenuItem
              navItem={navItem}
              level={level + 1}
              key={index}
            />
          ))}
        </CollapsedMenu>
      )}
    </CollapseContainer>
  );
};

export default HeaderCollapse;
