import React from "react";
import styled from "styled-components";
import { useLayout } from "hooks/layout";
import { FaChevronUp } from "react-icons/fa";

const ScrollTopButton = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #e1be64;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  bottom: 1rem;
  right: 2rem;
  transition: ease-in-out 0.5s;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const ScrollTopButtons = () => {
  const { scrollTop } = useLayout();

  return (
    <ScrollTopButton onClick={() => scrollTop()}>
      <FaChevronUp color="white" />
    </ScrollTopButton>
  );
};

export default ScrollTopButtons;
