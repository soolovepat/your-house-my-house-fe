import React, { useState } from "react";
import ImageCoverModal from './modals/imageModal/ImageCoverModal'

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
import Editor from "./editor/Editor";
import InputTitle from "./inputTitle";
import { styled } from "styled-components";
import ImageTagDiv from "./editor/imagetag/ImageTagDiv";

function Write() {
  // for Modal opening
  const [isSelector, setIsSelector] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [data, setData] = useState({
    title :"",
    residence :0,
    area :0,
    budget: 0,
    content:"",
    tags:[
      {
        contentImageId :"",
        tagsId :[],
        itemId:[],
        itemName:[],
        brand:[],
        coverImage :[],
        axisX : [],
        axisY:[]
      }
    ]
    
  })

  const selectorHandler = () => {
    setIsSelector(!isSelector);
  };

  const imageHandlerbuttton = () => {
    setIsImage(!isImage);
  };


  const onSubmitHandler = ()=>{

  }
  return (
    <>
      <StWriteheader>
        <button onClick={onSubmitHandler}> 발행</button>
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
              <StArrowIcon
                src={`${process.env.PUBLIC_URL}/assets/images/ico-arrow.svg`}
                alt="arrow"
                rotatearrow={isSelector}
              />
            </div>
          </StSelectorButton>
        {isSelector && <SelectorModal />}
        </StSelectorContainer>

        <StCoverImageContainer onClick={imageHandlerbuttton}>
          {coverImage ? (
            <img
              src={coverImage}
              alt="Cover"
              style={{ width: "100%", height: "100%", objectFit:"cover", cursor:"pointer" }}
            />
          ) : (
            <StImagebutton>
              <StImageTextTitle>
                <span>
                  드래그 앤 드롭이나 추가하기 버튼으로
                  <br />
                </span>
                커버 사진을 업로드해주세요.
              </StImageTextTitle>
              <StImageTextBody>
                <div>
                  "*권장 사이즈"
                  <br />
                  모바일: 1920 x 1920, 최소 1400 x 1400(1:1 비율)
                  <br />
                  PC: 1920 x 1080, 최소 1400 x 787(16:9 비율)
                </div>
              </StImageTextBody>

              <StButtonAdddiv> 커버 사진 추가하기</StButtonAdddiv>
            </StImagebutton>
          )}
        </StCoverImageContainer>

        {isImage && (
          <ImageCoverModal
            closeModal={() => setIsImage(false)}
            setCoverImage={setCoverImage}
          />
        )}
        <StTitleContainer>
          <InputTitle />
        </StTitleContainer>
        <StEditorContainer>
          <Editor />
          {/* <ImageTagDiv>
          <Imgwall src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </ImageTagDiv> */}
        </StEditorContainer>
      </StBodyContainer>
    </>
  );
}

export default Write;

const Imgwall = styled.img`
  width: 100%;
  height: 100%;
`;

