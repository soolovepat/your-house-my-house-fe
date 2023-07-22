import React from "react";
import { StNumberComma } from "./styled";

function NumberComma({ number, size, weight, lineheight }) {
  const addComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리 숫자 그룹간 경계를 ,로 치환
  };
  return (
    <StNumberComma size={size} weight={weight} lineheight={lineheight}>
      {addComma(number)}
    </StNumberComma>
  );
}

export default NumberComma;
