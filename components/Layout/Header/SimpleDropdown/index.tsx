import React, { useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import NavigationItem from "interfaces/Navigation/NavigationItem";
import { AiFillStar } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

interface Props {
  navList: NavigationItem[];
}

interface SideDropdown {
  sideItems: NavigationItem[];
  position: number;
}

interface SideDropdownProps {
  position: number;
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
  flex-direction: column;
  transform-origin: top center;
  animation: ${({ growDown }) => growDown} 300ms ease-in-out forwards;
  padding: 22px 0;
  position: absolute;
  top: 74px;
  left: 0px;
  cursor: default;
  background-color: #fff;
  height: auto;
  width: 220px;
  z-index: 300;
`;

const SideDropdownStyles = styled.ul<SideDropdownProps>`
  display: flex;
  flex-direction: column;
  padding: 22px 0;
  position: absolute;
  top: ${({ position }) => position * 52}px;
  left: 220px;
  cursor: default;
  background-color: #fff;
  height: auto;
  width: 220px;
  z-index: 300;
`;

const DropdownItem = styled.div`
  padding: 1px 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
const DropdownText = styled.p`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #333;
  &:hover {
    color: #e1be64;
  }
  flex-grow: 1;
`;

const SimpleDropdown = ({ navList }: Props) => {
  const [hoveredItems, setHoveredItems] = useState<SideDropdown | null>(null);

  return (
    <DropdownStyles growDown={growDown}>
      {navList.map((item, index) => (
        <DropdownItem key={index}>
          <DropdownText
            onMouseOver={() =>
              !!item.items?.length &&
              setHoveredItems({ sideItems: item.items, position: index })
            }
          >
            {item.name}
            {item.featured && (
              <AiFillStar
                color="#e1be64"
                size={12}
                style={{ paddingLeft: 4 }}
              />
            )}
          </DropdownText>
          {!!item.items && (
            <BiChevronRight
              size={18}
              style={{ justifySelf: "flex-end" }}
              onMouseOver={() =>
                !!item.items?.length &&
                setHoveredItems({ sideItems: item.items, position: index })
              }
            />
          )}
          {!!hoveredItems && (
            <SideDropdownStyles position={hoveredItems.position}>
              {hoveredItems.sideItems.map((sideItem, index) => (
                <DropdownItem key={index}>
                  <DropdownText>{sideItem.name} </DropdownText>
                </DropdownItem>
              ))}
            </SideDropdownStyles>
          )}
        </DropdownItem>
      ))}
    </DropdownStyles>
  );
};

export default SimpleDropdown;
