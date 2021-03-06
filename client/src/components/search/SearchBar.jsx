import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordList from "../keyword/KeywordList";

const SearchBar = ({ change, search }) => {
  // 연관 검색어
  const [keyword, setKeyword] = useState("");
  // 연관 검색어 결과
  const [keywordResult, setKeywordResult] = useState([]);

  const inputText = (event) => {
    const text = event.target.value;

    change(text);
    setKeyword(text);
    keywordHandler(keyword);
  };

  const searchText = () => {
    search();
  };

  const keywordHandler = (keyword) => {
    axios.post("/naver?type=keyword", { keyword }).then((response) => {
      const result = response.data.items;
      setKeywordResult(result);
    });
  };

  // 렌더링 성능 개선
  useEffect(() => {
    keywordHandler(keyword);
  }, [keyword]);

  useEffect(() => {
    setKeywordResult(keywordResult);
  }, [keywordResult]);

  return (
    <>
      <SearchInput
        onChange={inputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            searchText();
          }
        }}
      />
      <SearchButton onClick={searchText}>검색</SearchButton>
      <KeywordList keywordResult={keywordResult} change={change} />
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
