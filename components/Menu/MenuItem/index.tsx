import React from "react";
import Product from "interfaces/Product";
import styled from "styled-components";

interface Props {
  category_name: String;
  product: Product;
}

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
  object-fit: cover;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #333;
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  width: 100%;
  color: #999;
  font-weight: lighter;
  margin: 5px 0px;
  text-align: left;
`;

const ProductName = styled.span`
  color: #555;
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0px;
`;

const CatalogShowcaseItem = ({ product, category_name }: Props) => {
  return (
    <ItemContainer>
      <ImgContainer>
        <ProductImg src={product.img_url} alt={product.name} />
      </ImgContainer>
      <ProductName>{product.name}</ProductName>
      <ProductCategory>{category_name}</ProductCategory>
    </ItemContainer>
  );
};

export default CatalogShowcaseItem;
