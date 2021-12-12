import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Chart from "../components/Chart";
import axios from "axios";

const Main = () => {
  // 검색할 키워드
  const [search, setSearch] = useState("");
  // 키워드 자동 검색
  // const [keyword, setKeyword] = useState([]);
  // 검색 결과
  const [result, setResult] = useState({});

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

  return (
    <>
      <SearchBar change={changeHandler} search={searchHandler} />
      {Object.keys(result).length > 0 && <ProductList searchResult={result} />}
      <Chart />
    </>
  );
};

export default Main;
