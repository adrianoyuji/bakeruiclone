import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import Navigation from "interfaces/Navigation";
import SimpleDropdown from "../SimpleDropdown";
import WideDropdown from "../WideDropdown";

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
  position: relative;
`;

const NavigationTitle = styled.span`
  color: #333;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding-right: 0.1em;
`;

const NavigationItem = ({ item }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const renderSimpleDropdown = (navItem: Navigation) => {
    return <SimpleDropdown navList={navItem.items} />;
  };

  const renderWideDropdown = (navItem: Navigation) => {
    return <WideDropdown navList={navItem.items} />;
  };

  const renderDropdown = (navItem: Navigation) => {
    switch (navItem.dropdownType) {
      case "SIMPLE":
        return renderSimpleDropdown(navItem);
      case "WIDE":
        return renderWideDropdown(navItem);
      default:
        return null;
    }
  };

  return (
    <NavigationBox
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <NavigationTitle>{item.title}</NavigationTitle>
      <BiChevronDown size={12} />
      {isHovering && renderDropdown(item)}
    </NavigationBox>
  );
};

export default NavigationItem;
