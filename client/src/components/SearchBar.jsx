import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = () => {
  // 검색할 키워드
  const [search, setSearch] = useState("");
  // 키워드 자동 검색
  const [keyword, setKeyword] = useState([]);
  // 검색 결과
  const [result, setResult] = useState({});

  const onSearch = () => {
    console.log("검색한 단어: " + search);

    axios.get("/naver").then((response) => {
      console.log(response);
    });
  };

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <SearchInput onChange={onChange} />
      <SearchButton onClick={onSearch}>검색</SearchButton>
    </>
  );
};

const SearchInput = styled.input`
  width: 500px;
  padding: 10px 15px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 40px;
  background-color: skyblue;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export default SearchBar;
