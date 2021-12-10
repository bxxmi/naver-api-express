import React from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Chart from "../components/Chart";

const Main = () => {
  return (
    <>
      <SearchBar />
      <ProductList />
      <Chart />
    </>
  );
};

export default Main;
