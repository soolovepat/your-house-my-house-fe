import { styled } from "styled-components";

//-------- style---------//

// selector style
const StSelectorButton = styled.button`
  width: 100%;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  border: none;
  background: none;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
`;

const StSelectorTextMain = styled.div`
  display: inline-block;
  margin-left: 12px;
  font-size: 15px;
  font-weight: bold;
  line-height: 26px;
  color: rgb(63, 71, 77);
`;

const StSelectorTextSub = styled.div`
  margin-left: 8px;
  font-size: 13px;
  font-weight: normal;
  line-height: 26px;
  color: rgb(164, 172, 179);
`;
const StArrowIcon = styled.img`
  height: 20px;
  width: 15px;
  transition: transform 0.2s ease 0s;
  transform: ${(props) => (props.rotatearrow ? "rotate(180deg)" : "none")};
`;

//image button
const StImagebutton = styled.button`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
  font: inherit;
  background-color: rgb(247, 248, 250);
  border: none;
  cursor: pointer;
`;

const StButtonAdddiv = styled.div`
  display: inline-block;
  margin: 24px 0px 0px;
  padding: 11px 16px;
  background-color: rgba(33, 38, 41, 0.8);
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border-radius: 4px;
  transition: background-color 0.1s ease 0s;
`;

// imageText
const StImageTextTitle = styled.p`
  line-height: 20px;
  margin-bottom: 14px;
  color: rgb(47, 52, 56);
  font-weight: 700;
`;

const StImageTextBody = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgb(130, 140, 148);
`;

const StWriteheader = styled.div`
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(219, 219, 219);
    box-sizing: border-box;
    position: sticky;
    top: 0px;
    flex: 0 0 auto;
    z-index: 500;
`;

export {StSelectorButton, StSelectorTextMain,StArrowIcon,StButtonAdddiv,StImageTextBody,StImageTextTitle,StImagebutton,StSelectorTextSub,StWriteheader}