import { styled } from "styled-components";

// Image Modal Style
const StImageModalButton = styled.button.attrs({
  className: "boder",
})`
  max-width: 340px;
  width: 100%;
  padding: 14px 15px;
  background-color: #828c94;
  border-color: #828c94;
  color: #fff;
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  &.border {
    border: 1px solid transparent;
    display: inline-block;
  }
  &:hover {
    background-color: #656e75;
    border-color: #656e75;
  }
`;

const StImagePreviewText = styled.p`
  padding: 60px 0px;
  color: rgb(189, 189, 189);
  font-size: 15px;
  line-height: 23px;
  text-align: center;
`;

export { StImageModalButton, StImagePreviewText };
