import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import Navigation from "interfaces/Navigation";

interface Props {
  item: Navigation;
}

const NavigationBox = styled.li`
  text-align: center;
  padding: 0px 22px 0px 22px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const NavigationTitle = styled.span`
  color: #333;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding-right: 0.15em;
`;

const NavigationItem = ({ item }: Props) => {
  return (
    <NavigationBox>
      <NavigationTitle>{item.title}</NavigationTitle>
      <BiChevronDown size={12} />
    </NavigationBox>
  );
};

export default NavigationItem;
