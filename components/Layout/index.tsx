import React, { ReactNode } from "react";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import MetaTag from "components/Layout/MetaTag";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
  styles?: LayoutStyles;
  headerBackgroundColor?: string;
};

interface LayoutStyles {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const LayoutBody = styled.div<LayoutStyles>`
  height: "100vh";
  width: "100vw";
  padding-left: ${({ paddingLeft }) => paddingLeft || "none"};
  padding-right: ${({ paddingRight }) => paddingRight || "none"};
  padding-top: ${({ paddingTop }) => paddingTop || "none"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "none"};
`;

const Layout = ({
  children,
  title = "Welcome | Baker",
  styles = {},
  headerBackgroundColor,
}: Props) => (
  <LayoutBody {...styles}>
    <MetaTag title={title} />
    <Header backgroundColor={headerBackgroundColor} />
    {children}
    <Footer />
  </LayoutBody>
);

export default Layout;
