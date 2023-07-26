import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StCarousel, StCarouselArrow } from "./styled";
import Button from "../../../shared/button/Button";
import theme from "../../../../styles/theme";

const Carousel = ({
  children,
  currItemIndex,
  setCurrItemIndex,
  itemLength,
  move,
}) => {
  const onDecreaseIdx = () => {
    currItemIndex <= 0
      ? setCurrItemIndex(itemLength - 1)
      : setCurrItemIndex(currItemIndex - 1);
  };
  const onIncreaseIdx = () => {
    currItemIndex >= itemLength - 1
      ? setCurrItemIndex(0)
      : setCurrItemIndex(currItemIndex + 1);
  };

  return (
    <>
      <StCarousel>
        <div style={{ transform: `translateX(-${currItemIndex * move}%)` }}>
          {children}
        </div>
        <StCarouselArrow>
          <p onClick={onDecreaseIdx}>{"<"}</p>
          <p onClick={onIncreaseIdx}>{">"}</p>
          <Button>버튼</Button>
        </StCarouselArrow>
      </StCarousel>
    </>
  );
};

export default Carousel;
