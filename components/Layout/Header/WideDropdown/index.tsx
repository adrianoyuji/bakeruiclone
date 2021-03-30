import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import NavigationItem from "interfaces/Navigation/NavigationItem";
import { AiFillStar } from "react-icons/ai";

interface Props {
  navList: NavigationItem[];
}

interface DropdownAnimationProps {
  growDown: Keyframes;
}

const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;

const DropdownStyles = styled.ul<DropdownAnimationProps>`
  display: flex;
  flex-direction: row;
  transform-origin: top center;
  animation: ${({ growDown }) => growDown} 500ms ease-in-out forwards;
  padding: 22px 0;
  position: fixed;
  top: 74px;
  left: 30px;
  cursor: default;
  background-color: #fff;
  height: auto;
  width: 100vw;
  z-index: 300;
  overflow-x: hidden;
`;

const DropdownItem = styled.div`
  flex: 1;
  padding: 7px 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-left: solid;
  border-left-color: #e5e5e5;
  border-left-width: 1px;
  &:first-child {
    border-left: none;
    border-left-color: none;
    border-left-width: none;
  }
`;
const DropdownTitle = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.1em;
  color: #333;
  &:hover {
    color: #e1be64;
  }
`;
const DropdownText = styled.p`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #333;
  &:hover {
    color: #e1be64;
  }
`;

const SimpleDropdown = ({ navList }: Props) => {
  return (
    <DropdownStyles growDown={growDown}>
      {navList.map((item, index) => (
        <DropdownItem key={index}>
          <DropdownTitle>
            {item.name}
            {item.featured && (
              <AiFillStar
                color="#e1be64"
                size={12}
                style={{ paddingLeft: 4 }}
              />
            )}
          </DropdownTitle>
          {!!item.items &&
            item.items.map((subItem, index) => (
              <DropdownText key={index}>{subItem.name}</DropdownText>
            ))}
        </DropdownItem>
      ))}
    </DropdownStyles>
  );
};

export default SimpleDropdown;
