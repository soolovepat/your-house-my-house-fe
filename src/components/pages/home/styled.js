import styled from "styled-components";
import theme from "../../../styles/theme";

const columns = {
  4: "25%",
  3: "33.3333333333%",
  2: "24px",
};

export const StThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin-right: -10px;
  margin-left: -10px;
`;

export const StThumbnail = styled.div`
  ${(props) => (props.type === "house" ? theme.house : theme.product)}

  flex: 0 0 ${(props) => columns[props.column]};
  max-width: ${(props) => columns[props.column]};
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
  text-align: ${(props) => props.align};
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
    transform: scale(1.2);
  }
`;
