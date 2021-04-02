import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import HeaderIcon from "./HeaderIcon";
import Logo from "components/Logo";
import MobileDropdown from "./MobileDropdown";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import HeaderMessage from "./HeaderMessage";
import navigationList from "services/navigation";
import { useLayout } from "hooks/layout";

interface Props {
  backgroundColor?: string;
  fixed?: boolean;
  logoColor?: "white" | "black" | "#fff" | "#000";
  headerImageBackgroundContainer?: HeaderImagebackgroundProps;
}

interface HeaderImagebackgroundProps {
  image_url: string;
  title: string;
  subtitle: string;
}

interface HeaderStyles {
  fixed?: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
  windowWidth?: number;
}

interface HeaderMenuStyles {
  fixed?: boolean;
}

const HeaderBackground = styled.div<HeaderStyles>`
  background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  padding: 0px 2.7%;
  width: 100%;
  height: auto;
  background-image: ${({ backgroundImage }) =>
    `url(${backgroundImage})` || "none"};
  background-position: center;
  background-size: cover;
`;

const Header = styled.header<HeaderStyles>`
  width: 100%;
  padding: ${({ windowWidth }) =>
    windowWidth ? (windowWidth < 1024 ? "0px 2.7%" : "none") : "none"};
  background-color: ${({ backgroundColor, fixed }) =>
    fixed ? backgroundColor : "none"};
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
  logoColor = "black",
  headerImageBackgroundContainer,
}: Props) => {
  const { windowWidth, isMobileMenuOpen, toggleMobileMenu } = useLayout();

  return windowWidth > 1024 ? (
    <HeaderBackground
      backgroundColor={backgroundColor}
      backgroundImage={headerImageBackgroundContainer?.image_url}
    >
      <Header
        backgroundColor={backgroundColor}
        fixed={fixed}
        windowWidth={windowWidth}
      >
        <LeftElement>
          <Logo fontColor={logoColor} />
        </LeftElement>

        <MiddleElement fixed={fixed}>
          {navigationList.map((item, index) => (
            <NavigationItem item={item} key={index} color={logoColor} />
          ))}
        </MiddleElement>

        <RightElement>
          <HeaderIcon Icon={VscSearch} color={logoColor} />
          <HeaderIcon
            hasBadge
            badgeValue={0}
            Icon={AiOutlineShopping}
            color={logoColor}
          />
          <HeaderIcon Icon={AiOutlineMenu} color={logoColor} />
        </RightElement>
      </Header>
      {headerImageBackgroundContainer && (
        <HeaderMessage
          title={headerImageBackgroundContainer.title}
          subtitle={headerImageBackgroundContainer.subtitle}
        />
      )}
    </HeaderBackground>
  ) : (
    <>
      <Header
        backgroundColor={backgroundColor}
        fixed={fixed}
        windowWidth={windowWidth}
      >
        <LeftElement onClick={toggleMobileMenu}>
          <HeaderIcon Icon={AiOutlineMenu} />
        </LeftElement>

        <MiddleElement>
          <Logo fontColor="black" />
        </MiddleElement>

        <RightElement></RightElement>
      </Header>
      {headerImageBackgroundContainer && (
        <HeaderMessage
          title={headerImageBackgroundContainer.title}
          subtitle={headerImageBackgroundContainer.subtitle}
          img_url={headerImageBackgroundContainer.image_url}
        />
      )}
      {fixed || (isMobileMenuOpen && <MobileDropdown />)}
    </>
  );
};

export default HeaderComponent;
