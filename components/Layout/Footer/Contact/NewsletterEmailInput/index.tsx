import React from "react";
import styled from "styled-components";

const FooterItemContainer = styled.div`
  max-height: 45px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 16px 0px;
`;

const InputText = styled.input`
  flex: 3.75;
  padding: 0px 12px;
`;

const InputButton = styled.div`
  flex: 1.25;
  background-color: #e1be64;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15rem;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(242, 208, 120, 1);
  }
`;

const Contact = () => {
  return (
    <FooterItemContainer>
      <InputText />
      <InputButton>JOIN</InputButton>
    </FooterItemContainer>
  );
};

export default Contact;
