import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#dddddd",
  mediumGrayColor: "#939393",
  darkGrayColor: "#2F3438",
  BlackColor: "#000000",

  primaryColor: "#35c5f0",
  secondaryColor: "#FF7777",
};

const media = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  mobile: "(max-width: 767px)",
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

const types = {
  house,
  product,
};

const theme = {
  ...colors,
  ...media,
  ...types,
  // h1box,
};

export default theme;
