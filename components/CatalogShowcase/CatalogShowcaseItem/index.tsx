import React, { useState } from "react";
import Product from "interfaces/Product";
import styled, { keyframes } from "styled-components";

interface Props {
  category_name: String;
  product: Product;
}

const fadeInBottom = keyframes`
    from {
        transform: translateY(100%);
    }
    to {  }
`;

const ItemContainer = styled.div`
  height: 100%;
  width: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const ProductCategory = styled.span`
  font-size: 1rem;
  width: 75%;
  color: #999;
  text-align: center;
  font-weight: lighter;
  margin-top: 10px;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    color: #e1be64;
  }
`;

const ProductName = styled.span`
  color: #333;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  padding: 1rem 0px;
  font-weight: bold;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    color: #e1be64;
  }
`;

const ProductPrice = styled.span``;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const AddToCartButton = styled.div`
  height: auto;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0px;
  letter-spacing: 0.1rem;
  font-size: 0.75rem;
  font-weight: bold;
  bottom: 0;
  position: absolute;
  transition: ease-in-out 0.2s;
  animation: ${fadeInBottom} ease-in 0.2s forwards;
  &:hover {
    background-color: #e1be64;
  }
`;

const CatalogShowcaseItem = ({ product, category_name }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ItemContainer>
      <ImageContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ProductImg src={product.img_url} alt={product.name} />
        {isHovered && <AddToCartButton>ADD TO CART</AddToCartButton>}
      </ImageContainer>

      <ProductCategory>{category_name}</ProductCategory>
      <ProductName>{product.name.toUpperCase()}</ProductName>
      <ProductPrice>${(Number(product.price) / 100).toFixed(2)}</ProductPrice>
    </ItemContainer>
  );
};

export default CatalogShowcaseItem;
