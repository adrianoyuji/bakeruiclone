import { useLayout } from "hooks/layout";
import React from "react";
import styled from "styled-components";
import WindowProps from "interfaces/WindowProps";
import Contact from "./Contact";
import InstagramFeed from "./InstagramFeed";
import SocialLinks from "./SocialLinks";
import TwitterFeed from "./TwitterFeed";

const FooterContainer = styled.footer`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
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

const Footer = () => {
  const { windowWidth } = useLayout();

  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;
