import React from "react";

const Keyword = ({ keywordResult }) => {
  console.log(keywordResult);
  return (
    <ul>
      {keywordResult &&
        keywordResult.map((result) => {
          return <li>{result}</li>;
        })}
    </ul>
  );
};

export default Keyword;
