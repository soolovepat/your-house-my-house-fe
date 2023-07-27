import styled, { css } from "styled-components";

const house = css`
  height: 240px;
`;

export const StThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin-right: -10px;
  margin-left: -10px;
`;

export const StImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #ededed;
  ${(props) => (props.type === "house" ? house : "")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
    object-position: center center; /* Position the image at the center */
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.04);
  }
`;
