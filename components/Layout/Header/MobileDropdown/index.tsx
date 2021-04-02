import React from "react";
import navigationList from "services/navigation";
import HeaderCollapse from "./HeaderCollapse";
import styled, { keyframes } from "styled-components";

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

const DropdownStyles = styled.ul`
  display: flex;
  flex-direction: column;
  transform-origin: top center;
  animation: ${growDown} 500ms ease-in-out forwards;
  padding: 22px 0;
  position: fixed;
  top: 80px;
  left: 0px;
  cursor: default;
  background-color: #fff;
  height: auto;
  width: 100vw;
  z-index: 9999;
  overflow-x: hidden;
`;

const MobileDropdown = () => {
  return (
    <DropdownStyles>
      {navigationList.map((catergory, index) => (
        <HeaderCollapse navList={catergory} key={index} level={0} />
      ))}
    </DropdownStyles>
  );
};

export default MobileDropdown;
