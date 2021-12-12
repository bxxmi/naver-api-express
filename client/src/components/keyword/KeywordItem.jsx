import React from "react";

const KeywordItem = ({ result, change }) => {
  const keywordClick = (event) => {
    change(event.target.innerText);
  };
  return (
    <>
      {result &&
        result.map((item, index) => {
          return (
            <li key={index} onClick={keywordClick}>
              {item}
            </li>
          );
        })}
    </>
  );
};

export default KeywordItem;
