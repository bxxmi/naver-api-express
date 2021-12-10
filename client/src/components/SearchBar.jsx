import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <>
      <SearchInput />
      <SearchButton>검색</SearchButton>
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
`;

export default SearchBar;
