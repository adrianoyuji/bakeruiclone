import React from "react";
import styled from "styled-components";

interface Props {
  img_url: string;
  title: string;
}

const ItemContainer = styled.div`
  height: 90%;
  width: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const FeedItem = ({ img_url, title }: Props) => {
  return (
    <ItemContainer>
      <ProductImg src={img_url} alt={title} />
    </ItemContainer>
  );
};

export default FeedItem;
