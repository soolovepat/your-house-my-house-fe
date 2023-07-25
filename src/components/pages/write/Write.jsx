import React, { useState } from "react";


import {
  StArrowIcon,
  StButtonAdddiv,
  StImageTextBody,
  StImageTextTitle,
  StImagebutton,
  StSelectorButton,
  StSelectorTextMain,
  StSelectorTextSub,
  StWriteheader,
} from "./styled";

import {
  StBodyContainer,
  StCoverImageContainer,
  StEditorContainer,
  StSelectorContainer,
  StTitleContainer,
} from "./container";

import SelectorModal from "./modals/selectorModal";
import ImageModal from "./modals/imageModal";
import Editor from "./editor/Editor";
import InputTitle from "./inputTitle";
import { styled } from "styled-components";
import ImageTagDiv from "./editor/imagetag/ImageTagDiv";

function Write() {

  // for Modal opening
  const [isSelector, setIsSelector] = useState("");
  const [isImage, setIsImage] = useState("");

  const selectorHandler = () => {
    setIsSelector(!isSelector);
  };

  const imageHandlerbuttton = () => {
    setIsImage(!isImage);
  };
  return (
    <>
      <StWriteheader>

      </StWriteheader>
      <StBodyContainer>
        <StSelectorContainer>
          <StSelectorButton onClick={selectorHandler}>
            <div style={{ display: "flex", flex: "1 0 0px" }}>
              <div> icon</div>
              <StSelectorTextMain> 필수 정보 입력</StSelectorTextMain>
              <StSelectorTextSub>
                공간을 이해하는데 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.
              </StSelectorTextSub>
            </div>
            <div>
              <StArrowIcon src={`${process.env.PUBLIC_URL}/assets/images/ico-arrow.svg`} alt="arrow" rotatearrow={isSelector} />
            </div>
          </StSelectorButton>
        </StSelectorContainer>
        {isSelector && <SelectorModal />}

        <StCoverImageContainer>
          <StImagebutton onClick={imageHandlerbuttton}>
            <StImageTextTitle>
              <span>
                드래그 앤 드롭이나 추가하기 버튼으로
                <br />
              </span>
              커버 사진을 업로드해주세요.
            </StImageTextTitle>
            <StImageTextBody>
              "*권장 사이즈"
              <br />
              모바일: 1920 x 1920, 최소 1400 x 1400(1:1 비율)
              <br />
              PC: 1920 x 1080, 최소 1400 x 787(16:9 비율)
            </StImageTextBody>
            <StButtonAdddiv> 커버 사진 추가하기</StButtonAdddiv>
          </StImagebutton>
        </StCoverImageContainer>
        {isImage && <ImageModal />}

        <StTitleContainer>
          <InputTitle />
        </StTitleContainer>
        <StEditorContainer>
          <Editor />
        </StEditorContainer>
      </StBodyContainer>
    </>
  );
}

export default Write;


