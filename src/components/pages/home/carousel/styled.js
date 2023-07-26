import styled from "styled-components";

export const StCarousel = styled.div`
  overflow: hidden;
  height: 100%;
  cursor: pointer;

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

export const StCarouselArrow = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  height: 100%;
`;
