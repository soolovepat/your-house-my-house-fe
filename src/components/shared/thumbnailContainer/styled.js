import styled from "styled-components";

export const StThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin-right: -10px;
  margin-left: -10px;
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
    transform: scale(1.04);
  }
`;
