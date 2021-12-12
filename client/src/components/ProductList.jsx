import React from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const ProductList = ({ searchResult }) => {
  console.log(searchResult);
  return (
    <ProductListTemplate>
      {Object.keys(searchResult).map((result) => {
        return <ProductItem searchResult={searchResult[result]} key={result} />;
      })}
    </ProductListTemplate>
  );
};

const ProductListTemplate = styled.ul`
  width: 500px;
  padding: 0;
  border: 1px solid red;
`;

export default ProductList;
