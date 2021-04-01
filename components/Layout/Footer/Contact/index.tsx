import React from "react";
import styled from "styled-components";
import NewsletterEmailInput from "./NewsletterEmailInput";

const FooterItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 10% 10%;
  flex-direction: column;
`;

const FooterSectionTitle = styled.span`
  color: white;
  font-size: 1rem;
  letter-spacing: 0.25rem;
  padding-bottom: 1.5rem;
`;
const NewsletterMEssage = styled.p`
  color: #666;
  text-align: justify;
  line-height: 1.5rem;
  font-size: 0.75rem;
  padding: 1rem 0px;
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: #666;
`;

const PhoneContainer = styled.span`
  color: #666;
  font-size: 12px;
`;

const PhoneNumber = styled.span`
  color: #e1be64;
  font-size: 14px;
  font-weight: 100;
`;

const Contact = () => {
  return (
    <FooterItemContainer>
      <FooterSectionTitle>JOIN THE CLUB</FooterSectionTitle>
      <NewsletterEmailInput />
      <NewsletterMEssage>
        Sign me up to receive emails on new product arrivals special offers.
      </NewsletterMEssage>
      <PhoneContainer>
        Contact us: <PhoneNumber>00 34 938 60 24 24</PhoneNumber>
      </PhoneContainer>
    </FooterItemContainer>
  );
};

export default Contact;
