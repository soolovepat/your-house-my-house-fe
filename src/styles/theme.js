import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#dddddd",
  mediumGrayColor: "#939393",
  darkGrayColor: "#656e75",
  BlackColor: "#000000",

  primaryColor: "#35c5f0",
  primaryDarkColor: "#09addb",
  secondaryColor: "#FF7777",
};

const media = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  mobile: "(max-width: 767px)",
};

const mixins = {
  container: css`
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
  `,
  roundBtn: css`
    // width, height, padding, margin 을 추가하셔서 사용하시면 됩니다.
    background: #fff;
    color: #828c94;
    border-radius: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s, color 0.2s, background-color 0.2s;
    line-height: 0;
    cursor: pointer;

    &:hover {
      color: ${colors.darkGrayColor};
    }
  `,
};

const numberfont = css`
  font-family: "Inter", sans-serif;
`;

const theme = {
  ...colors,
  ...media,
  ...mixins,
  numberfont,
};

export default theme;
