import React from "react";
import styled from "styled-components";

const ProductItem = ({ searchResult }) => {
  const { productId, title } = searchResult;
  return <ProductItemTemplate>{title}</ProductItemTemplate>;
};

const ProductItemTemplate = styled.li`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid blue;
`;
export default ProductItem;
