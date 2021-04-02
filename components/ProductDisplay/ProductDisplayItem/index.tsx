import React from "react";
import styled from "styled-components";
import Product from "interfaces/Product";

interface Props {
  product: Product;
}

const ProductDisplayContainer = styled.div`
  height: 75%;
  width: 75%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.span`
  margin-top: 10px;
  font-family: "Playfair";
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #999;
  font-weight: lighter;
  text-align: center;
  margin-top: 10px;
`;

const ProductDisplayItem = ({ product }: Props) => {
  return (
    <ProductDisplayContainer>
      <ProductImg alt="product-image" src={product.img_url} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt
        ut laoreet dolore magna.
      </ProductDescription>
    </ProductDisplayContainer>
  );
};

export default ProductDisplayItem;
