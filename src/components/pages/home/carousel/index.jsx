import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StCarousel } from "./styled";

const Carousel = ({ children, itemLength }) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);

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
        <div style={{ transform: `translateX(-${currItemIndex * 80}%)` }}>
          {children}
        </div>
        <p onClick={onDecreaseIdx}>{"<"}</p>
        <p onClick={onIncreaseIdx}>{">"}</p>
      </StCarousel>

      <CarouselDots
        currItemIndex={currItemIndex}
        itemLength={children.length}
      />
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
