import styled from "styled-components";
import theme from "../../../styles/theme";
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
    margin-top: 9px;
    line-height: 24px;
    font-size: 13px;
    font-weight: 300;
    word-break: keep-all;
    word-wrap: break-word;
  }

  > span {
    margin-top: 2px;
    font-size: 17px;
    line-height: 23px;
    font-weight: 700;
  }
`;

export const StThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin-right: -10px;
  margin-left: -10px;
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

export const StImgWrap = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: #ededed;

  img {
    width: 100%;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.2);
  }
`;
