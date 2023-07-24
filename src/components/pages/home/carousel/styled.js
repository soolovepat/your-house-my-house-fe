import styled from "styled-components";

export const StCarousel = styled.div`
  overflow: hidden;

  div {
    transition: transform 0.5s;
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
