import React from "react";

const ProductItem = ({ searchResult }) => {
  console.log(searchResult);
  return <div>{searchResult.title}</div>;
};

export default ProductItem;
