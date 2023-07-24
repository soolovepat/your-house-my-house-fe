import styled from "styled-components";

export const StCategories = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 44px;
    scroll-snap-align: start;

    > img {
      width: 90px;
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
