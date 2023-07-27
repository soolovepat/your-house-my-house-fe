import React, { useState } from "react";
import styled, { css } from "styled-components";

// import Button from "../../../shared/button/Button";
import Button from "../../../shared/Button/Button";
// import theme from "../../../../Styles/theme";
import theme from "../../../../styles/theme";
import { StCarousel, StCarouselArrow } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({
  children,
  currItemIndex,
  setCurrItemIndex,
  itemLength,
  move,
  type,
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
      <StCarousel
        currItemIndex={currItemIndex}
        itemLength={itemLength}
        type={type}
      >
        <div style={{ transform: `translateX(-${currItemIndex * move}%)` }}>
          {children}
        </div>
        {itemLength > 1 ? (
          <StCarouselArrow
            currItemIndex={currItemIndex}
            itemLength={itemLength}
            type={type}
          >
            <button onClick={onDecreaseIdx}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={onIncreaseIdx}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </StCarouselArrow>
        ) : null}
      </StCarousel>
    </>
  );
};

export default Carousel;
