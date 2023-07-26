import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";

const alwaysArrow = css`
  opacity: 1;

  button:nth-child(1) {
    opacity: ${(props) => (props.currItemIndex === 0 ? 0 : 1)};
  }

  button:last-child {
    opacity: ${(props) =>
      props.currItemIndex === props.itemLength - 1 ? 0 : 1};
  }
`;

const hoverArrow = css`
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const StCarouselArrow = styled.div`
  z-index: 100;
  transition: opacity 0.2s ease-in-out 0s;
  position: relative;
  top: -60px;
  ${(props) => (props.type === "alwaysArrow" ? alwaysArrow : hoverArrow)}

  > button {
    ${theme.roundBtn}
    width: 48px;
    height: 48px;
    margin: 0;
    font-size: 24px;
    box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);
    position: absolute;
    transform: translate(-50%, -50%);

    &:nth-child(1) {
      top: 50%;
      left: 0%;
    }

    &:nth-child(2) {
      top: 50%;
      left: 100%;
    }

    > svg {
    }
  }
`;

export const StCarousel = styled.div`
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    ${StCarouselArrow} {
      opacity: 1;
    }
  }

  > div:nth-child(1) {
    transition: transform 0.5s;
    height: 100%;
  }
  > p {
    position: absolute;
  }
  > p:nth-child(2) {
    left: 10%;
  }
  > p:nth-child(3) {
    right: 10%;
  }
`;
