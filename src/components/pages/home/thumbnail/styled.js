import styled from "styled-components";
import { css } from "styled-components";

const columns = {
  4: "25%",
  3: "33.3333333333%",
  2: "24px",
};

const house = css`
  h1 {
    margin: 18px 0 8px;
    line-height: 24px;
    font-size: 17px;
    font-weight: 700;
    word-break: keep-all;
    word-wrap: break-word;
  }

  address {
    margin: 8px 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }

  footer {
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
  }
`;

const product = css`
  h1 {
    display: flex;
    flex-direction: column;
    margin-top: 9px;
    line-height: 17px;
    font-size: 13px;
    font-weight: 300;
    word-break: keep-all;
    word-wrap: break-word;

    > span:nth-child(1) {
      font-size: 11px;
    }
  }
`;

export const StThumbnail = styled.div`
  ${(props) => (props.type === "house" ? house : product)}

  flex: 0 0 ${(props) => columns[props.column]};
  max-width: ${(props) => columns[props.column]};
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
  text-align: ${(props) => props.align};
`;
