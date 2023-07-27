import styled from "styled-components";
import theme from "../../../styles/theme";

export const StItemDetailTop = styled.div`
  display: flex;

  margin: 40px 0;

  div:nth-child(1) {
    flex: 0 0 59%;
    max-width: 59%;
  }

  div:nth-child(2) {
    flex: 0 0 41%;
    max-width: 41%;

    display: flex;
    flex-direction: column;
    padding-left: 40px;
  }

  div > img {
    width: 100%;
  }

  div > span:not(:nth-child(3)) {
    display: flex;
    font-size: 14px;
    line-height: 25px;

    > strong {
      width: 42px;
      color: ${theme.mediumGrayColor};
    }

    > span {
      display: flex;
      flex-direction: column;
    }

    > span > span {
      letter-spacing: 0.01px;

      &:nth-child(4) {
        color: ${theme.mediumGrayColor};
        font-size: 13px;

        svg {
          margin-right: 6px;
        }
      }
    }

    > span > span > strong {
      font-weight: 700;
    }
  }

  div > span:nth-child(1) {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 4px;
    color: ${theme.darkGrayColor};
  }

  div > strong:nth-child(2) {
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    min-height: 43px;
    margin: 0 92px 0 0;
  }

  div > span:nth-child(4) {
    margin-top: 20px;
    margin-bottom: 14px;
  }
  div > span:nth-child(5) {
  }
`;
