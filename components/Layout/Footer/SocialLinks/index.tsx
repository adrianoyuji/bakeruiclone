import React from "react";
import styled from "styled-components";
import Logo from "components/Logo";
import SocialMedia from "utils/SocialMedia";

const FooterItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 10% 10%;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  justify-self: flex-start;
`;

const CompanyDescription = styled.p`
  color: #999;
  text-align: justify;
  line-height: 1.5rem;
  padding: 1rem 0px;
`;

const IconContainer = styled.div`
  padding: 0px 0.5rem;
  cursor: pointer;
`;

const SocialLiksContainer = styled.div`
  color: #999;
  display: flex;
  flex-direction: row;
`;

const SocialLinks = () => {
  return (
    <FooterItemContainer>
      <LogoContainer>
        <Logo fontColor="white" />
      </LogoContainer>
      <CompanyDescription>
        Sed ut perspiciatis unde omnis iste natus and error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis quasi
      </CompanyDescription>
      <SocialLiksContainer>
        Follow us:{" "}
        {SocialMedia.map((socialMediaItem, index) => (
          <IconContainer key={index}>
            <socialMediaItem.icon size={12} />
          </IconContainer>
        ))}
      </SocialLiksContainer>
    </FooterItemContainer>
  );
};

export default SocialLinks;
