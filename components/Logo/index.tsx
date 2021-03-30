import React from "react";

interface Props {
  fontColor?: "white" | "black" | "#fff" | "#000";
}

const whiteLogo =
  "https://baker.qodeinteractive.com/wp-content/uploads/2017/03/logo-dark.png";
const blackLogo =
  "https://baker.qodeinteractive.com/wp-content/uploads/2017/03/h5-logo-img-1.png";

const Logo = ({ fontColor = "white" }: Props) => {
  return (
    <img
      src={fontColor === "white" ? whiteLogo : blackLogo}
      height="60px"
      width="auto"
    />
  );
};

export default Logo;
