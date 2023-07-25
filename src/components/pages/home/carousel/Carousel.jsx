import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StCarousel } from "./styled";
import Button from "../../../shared/Button/Button";
import theme from "../../../../Styles/theme";

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
        <p onClick={onDecreaseIdx}>{"<"}</p>
        <p onClick={onIncreaseIdx}>{">"}</p>
        <Button>버튼</Button>
      </StCarousel>

      <CarouselDots currItemIndex={currItemIndex} itemLength={itemLength} />
    </>
  );
};

const CarouselDots = ({ currItemIndex, itemLength }) => {
  return (
    <DotsBlock>
      {Array(itemLength)
        .fill(null)
        .map((_, idx) => (
          <Dot key={idx} active={currItemIndex === idx} />
        ))}
    </DotsBlock>
  );
};

export default Carousel;

const DotsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 360px;
  padding: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme.whiteColor};
    `}
`;
