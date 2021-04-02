import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import HeaderIcon from "./HeaderIcon";
import Logo from "components/Logo";
import MobileDropdown from "./MobileDropdown";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";

import navigationList from "services/navigation";
import { useLayout } from "hooks/layout";

interface Props {
  backgroundColor?: string;
  fixed?: boolean;
}

interface HeaderStyles {
  fixed?: boolean;
  backgroundColor?: string;
}

interface HeaderMenuStyles {
  fixed?: boolean;
}

const Header = styled.header<HeaderStyles>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ fixed }) => (fixed ? "80px" : "90px")};
  z-index: 9998;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: ${({ fixed }) => (fixed ? "fixed" : "none")};
  top: ${({ fixed }) => (fixed ? "0" : "none")};
  left: ${({ fixed }) => (fixed ? "0" : "none")};
  padding: ${({ fixed }) => (fixed ? "0px 2.7%" : "none")};
  border-bottom: ${({ fixed }) => (fixed ? "solid" : "none")};
  border-bottom-width: ${({ fixed }) => (fixed ? "1px" : "none")};
  border-bottom-color: ${({ fixed }) => (fixed ? "#ccc" : "none")};
`;

const LeftElement = styled.div`
  justify-self: flex-start;
`;

const RightElement = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
`;

const MiddleElement = styled.nav<HeaderMenuStyles>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${({ fixed }) => (fixed ? "flex-end" : "center")};
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
`;

const HeaderComponent = ({
  backgroundColor = "#fff",
  fixed = false,
}: Props) => {
  const { windowWidth, isMobileMenuOpen, toggleMobileMenu } = useLayout();

  return windowWidth > 1024 ? (
    <Header backgroundColor={backgroundColor} fixed={fixed}>
      <LeftElement>
        <Logo fontColor="black" />
      </LeftElement>

      <MiddleElement fixed={fixed}>
        {navigationList.map((item, index) => (
          <NavigationItem item={item} key={index} />
        ))}
      </MiddleElement>

      <RightElement>
        <HeaderIcon Icon={VscSearch} />
        <HeaderIcon hasBadge badgeValue={0} Icon={AiOutlineShopping} />
        <HeaderIcon Icon={AiOutlineMenu} />
      </RightElement>
    </Header>
  ) : (
    <>
      <Header backgroundColor={backgroundColor} fixed={fixed}>
        <LeftElement onClick={toggleMobileMenu}>
          <HeaderIcon Icon={AiOutlineMenu} />
        </LeftElement>

        <MiddleElement>
          <Logo fontColor="black" />
        </MiddleElement>

        <RightElement></RightElement>
      </Header>
      {fixed || (isMobileMenuOpen && <MobileDropdown />)}
    </>
  );
};

export default HeaderComponent;
