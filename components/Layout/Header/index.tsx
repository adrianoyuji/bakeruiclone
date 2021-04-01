import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import HeaderIcon from "./HeaderIcon";
import Logo from "components/Logo";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";

import navigationList from "services/navigation";

interface Props {
  backgroundColor?: string;
}

interface HeaderStyles {
  backgroundColor?: string;
}

interface HeaderMenuStyles {}

const Header = styled.header<HeaderStyles>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 90px;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled.div`
  justify-self: flex-start;
`;

const HeaderShortcuts = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
`;

const HeaderMenu = styled.nav<HeaderMenuStyles>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const HeaderComponent = ({ backgroundColor = "#fff" }: Props) => {
  return (
    <Header backgroundColor={backgroundColor}>
      <LogoContainer>
        <Logo fontColor="black" />
      </LogoContainer>

      <HeaderMenu>
        {navigationList.map((item, index) => (
          <NavigationItem item={item} key={index} />
        ))}
      </HeaderMenu>

      <HeaderShortcuts>
        <HeaderIcon Icon={VscSearch} />
        <HeaderIcon hasBadge badgeValue={0} Icon={AiOutlineShopping} />
        <HeaderIcon Icon={AiOutlineMenu} />
      </HeaderShortcuts>
    </Header>
  );
};

export default HeaderComponent;
