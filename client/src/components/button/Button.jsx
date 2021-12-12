import React from "react";
import styled from "styled-components";

const Button = ({ productId }) => {
  const buyProduct = () => {
    console.log(productId);
  };

  return <ButtonTemplate onClick={buyProduct}>구매</ButtonTemplate>;
};

const ButtonTemplate = styled.button`
  width: 80px;
  height: 30px;
  background-color: skyblue;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

export default Button;
