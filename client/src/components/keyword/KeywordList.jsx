import React from "react";
import KeywordItem from "./KeywordItem";

const Keyword = ({ keywordResult, change }) => {
  return (
    <ul>
      {keywordResult &&
        keywordResult.map((result) => {
          return <KeywordItem result={result} change={change} key={result} />;
        })}
    </ul>
  );
};

export default Keyword;
