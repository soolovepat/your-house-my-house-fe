import styled from "styled-components";
import theme from "../../../../styles/theme";

export const StBanner = styled.div`
  max-width: 1256px;
  display: flex;
  box-sizing: border-box;
  margin: 30px 0;

  section {
    position: relative;
    padding-top: 508px;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
    }
  }

  section:nth-child(1) {
    flex: 1 1 847px;
    border-radius: 4px;

    > div {
      overflow: hidden;
    }
  }

  section:nth-child(2) {
    flex: 1 1 269px;
    margin-left: 20px;
  }

  img {
    width: 100%;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.04);
  }
`;

export const StSmallBanner = styled.ul`
  display: flex;
  height: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start;
    min-width: 100%;
    height: 100%;
    cursor: pointer;

    a > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0px 30px 30px;

      strong {
        font-size: 32px;
        font-weight: 700;
        word-break: keep-all;
        text-overflow: ellipsis;
        line-height: 42px;
        color: ${theme.whiteColor};
      }
      span {
        margin-top: 8px;
        color: ${theme.whiteColor};
      }
    }

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
  }
`;

export const StSmallBannerNumber = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  bottom: 12px;
  right: 12px;

  > span {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 6px 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Inter", sans-serif;
    border-radius: 18px;
    color: ${theme.whiteColor};
    background-color: rgba(0, 0, 0, 0.3);

    > strong {
      font-size: 20px;
      line-height: 20px;
      color: ${theme.whiteColor};
      transform: translateY(-1px);
    }
  }
`;
