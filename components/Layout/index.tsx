import React, { ReactNode } from "react";
import HeaderComponent from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import MetaTag from "components/Layout/MetaTag";
import ScrollToTopButton from "components/Layout/ScrollToTopButton";
import styled from "styled-components";
import { useLayout } from "hooks/layout";

type Props = {
  children?: ReactNode;
  title?: string;
  styles?: LayoutStyles;
  headerBackgroundColor?: string;
  logoColor?: "white" | "black" | "#fff" | "#000";
  headerImageBackgroundContainer?: HeaderImagebackgroundProps;
};

interface HeaderImagebackgroundProps {
  image_url: string;
  title: string;
  subtitle: string;
}

interface LayoutStyles {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const LayoutBody = styled.div<LayoutStyles>`
  height: auto;
  width: 100%;
  padding-left: ${({ paddingLeft }) => paddingLeft || "none"};
  padding-right: ${({ paddingRight }) => paddingRight || "none"};
  padding-top: ${({ paddingTop }) => paddingTop || "none"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "none"};
  overflow-x: hidden;
`;

const Layout = ({
  children,
  title = "Welcome | Baker",
  styles = {},
  headerBackgroundColor,
  logoColor = "black",
  headerImageBackgroundContainer,
}: Props) => {
  const { screenRef, showFixedHeader } = useLayout();

  return (
    <>
      <HeaderComponent
        backgroundColor={headerBackgroundColor}
        logoColor={logoColor}
        headerImageBackgroundContainer={headerImageBackgroundContainer}
      />
      {showFixedHeader && <HeaderComponent fixed />}
      <LayoutBody {...styles} ref={screenRef}>
        <MetaTag title={title} />
        {children}
        <Footer />
        <ScrollToTopButton />
      </LayoutBody>
    </>
  );
};

export default Layout;
