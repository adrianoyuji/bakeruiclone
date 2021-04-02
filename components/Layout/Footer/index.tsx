import { useLayout } from "hooks/layout";
import React, { useLayoutEffect, useState, useRef } from "react";
import styled from "styled-components";
import WindowProps from "interfaces/WindowProps";
import Contact from "./Contact";
import InstagramFeed from "./InstagramFeed";
import SocialLinks from "./SocialLinks";
import TwitterFeed from "./TwitterFeed";

interface Props {
  attachFooter: boolean;
}

interface FooterStylesProps {
  footerHeight?: number;
  attachFooter?: boolean;
  windowWidth?: number;
}

const FooterContainer = styled.footer<FooterStylesProps>`
  height: ${({ footerHeight }) => footerHeight}px;
  width: 100%;
`;
const FooterSubContainer = styled.div<FooterStylesProps>`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  position: ${({ attachFooter, windowWidth }) =>
    windowWidth && windowWidth > 1024
      ? attachFooter
        ? "fixed"
        : "none"
      : "none"};
  bottom: ${({ attachFooter, windowWidth }) =>
    windowWidth && windowWidth > 1024
      ? attachFooter
        ? "0px"
        : "none"
      : "none"};
  z-index: ${({ attachFooter, windowWidth }) =>
    windowWidth && windowWidth > 1024
      ? attachFooter
        ? "-1"
        : "none"
      : "none"};
`;

const FooterDetails = styled.div<WindowProps>`
  background-color: #222;
  display: grid;
  grid-template-columns: ${({ windowWidth }) =>
    windowWidth
      ? windowWidth > 1024
        ? "25% 25% 25% 25%"
        : windowWidth > 768
        ? "50% 50%"
        : "100%"
      : "100%"};
  padding: 4vh 3vw;
  justify-items: center;
`;
const FooterMadeBy = styled.div`
  padding: 2vh 0px;
  text-align: center;
  background-color: #111;
  color: #777;
  font-size: 0.75rem;
`;

const Footer = ({ attachFooter }: Props) => {
  const { windowWidth } = useLayout();
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    function updateFooterHeight() {
      //@ts-ignore
      setFooterHeight(footerRef.current.offsetHeight);
    }

    window.addEventListener("scroll", updateFooterHeight);

    updateFooterHeight();
    return () => {
      window.removeEventListener("scroll", updateFooterHeight);
    };
  }, []);

  return (
    <FooterContainer footerHeight={footerHeight}>
      <FooterSubContainer
        windowWidth={windowWidth}
        attachFooter={attachFooter}
        ref={footerRef}
      >
        <FooterDetails windowWidth={windowWidth}>
          <SocialLinks />
          <TwitterFeed />
          <InstagramFeed />
          <Contact />
        </FooterDetails>
        <FooterMadeBy>
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/"
            target="_blank"
          >
            Adriano Vasconcelos
          </a>
        </FooterMadeBy>
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
