import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import ProductList from "../components/product/ProductList";
import Chart from "../components/chart/Chart";
import axios from "axios";

const Main = () => {
  // 검색할 키워드
  const [search, setSearch] = useState("");

  // 검색 결과
  const [result, setResult] = useState({});

  // 구매할 아이템
  const [purchase, setPurchase] = useState({});

  const changeHandler = (text) => {
    setSearch(text);
  };

  // get은 뒤에 파라미터 전송 x
  // post는 가능
  const searchHandler = () => {
    axios.post("/naver?type=result", { search }).then((response) => {
      const products = response.data.items;
      setResult(products);
    });
  };

  const buyHandler = (item) => {
    // console.log("살 아이템:" + item);
    axios.post("/naver?type=buy", { item }).then((response) => {
      console.log(response);
      // const products = response.data.items;
      // setPurchase(response);
    });
  };

  return (
    <>
      <SearchBar change={changeHandler} search={searchHandler} />
      {Object.keys(result).length > 0 && (
        <ProductList searchResult={result} buy={buyHandler} />
      )}
      <Chart />
    </>
  );
};

export default Main;
