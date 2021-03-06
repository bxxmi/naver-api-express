import React from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const ProductList = ({ searchResult, buy }) => {
  return (
    <ProductListTemplate>
      {Object.keys(searchResult).map((result) => {
        return (
          <ProductItem
            searchResult={searchResult[result]}
            key={result}
            buy={buy}
          />
        );
      })}
    </ProductListTemplate>
  );
};

const ProductListTemplate = styled.ul`
  width: 100%;
  padding: 0;
  border: 1px solid red;
`;

export default ProductList;
