import React, { useState } from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  size?: number;
  color?: string;
  hoverColor?: string;
  hasBadge?: boolean;
  badgeValue?: number;
}

interface IconContainerStyles {
  color?: string;
  hoverColor?: string;
}

const IconContainer = styled.div<IconContainerStyles>`
  padding: 0px 18px 0px 18px;
  position: relative;
  cursor: pointer;
`;

const Badge = styled.div`
  border-radius: 999px;
  background-color: #e1be64;
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  position: absolute;
  right: 15%;
  bottom: 50%;
`;

const HeaderIcon = ({
  Icon,
  size = 26,
  color = "#333",
  hoverColor = "#e1be64",
  hasBadge = false,
  badgeValue = 0,
}: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <IconContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {hasBadge && <Badge>{badgeValue}</Badge>}
      <Icon
        size={size}
        style={{
          color: isHovering ? hoverColor : color,
          transition: "ease-in .2s",
        }}
      />
    </IconContainer>
  );
};

export default HeaderIcon;
