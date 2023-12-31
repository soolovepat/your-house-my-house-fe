import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";

const gradientOnBoth = css`
  &::before {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255) 0%,
      rgb(255, 255, 255, 0) 100%
    );
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 90%;
    left: 0;
    z-index: 1;
  }

  &::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 90%;
    z-index: 1;
  }
`;

const gradientOnRight = css`
  &::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 90%;
    z-index: 1;
  }
`;

export const StCategory = styled.div`
  position: relative;
  margin-bottom: 70px;

  > div {
    ${(props) => (props.currItemIndex !== 0 ? gradientOnBoth : gradientOnRight)}
  }
`;

export const StCategoryList = styled.ul`
  display: flex;
  height: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 44px;
    scroll-snap-align: start;

    > img {
      width: 90px;
      height: 90px;
    }

    > p {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      text-align: center;
      width: 100%;
      margin-top: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 4px;
      color: ${theme.darkGrayColor};
    }

    cursor: pointer;
  }
`;
