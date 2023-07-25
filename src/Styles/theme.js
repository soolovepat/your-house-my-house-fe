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

const mixins = {
  container: () => `
      max-width: 1256px;
      margin: 0 auto;
      padding: 0 60px;
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
  ...colors,
  ...media,
};

export default theme;
