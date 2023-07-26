import styled from "styled-components";

export const StBanner = styled.div`
  max-width: 1256px;
  display: flex;
  box-sizing: border-box;

  section {
    position: relative;
    padding-top: 508px;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  section:nth-child(1) {
    flex: 1 1 847px;
    border-radius: 4px;
  }

  section:nth-child(2) {
    flex: 1 1 269px;
    margin-left: 20px;
    border-radius: 4px;
  }
`;

export const StSmallBanner = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start;
    min-width: 100%;

    a > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-sizing: border-box;
    }

    > a {
      display: block;
      height: 100%;
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
    }

    cursor: pointer;
  }
`;
