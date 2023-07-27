import React, { useState } from "react";
import ImageCoverModal from "./modals/imageModal/ImageCoverModal";
import api from "../../../api/api";
import {
  StArrowIcon,
  StButtonAdddiv,
  StImageTextBody,
  StImageTextTitle,
  StImagebutton,
  StSelectorButton,
  StSelectorTextMain,
  StSelectorTextSub,
  StSubmitBtn,
  StWriteheader,
} from "./styled";

import {
  StBodyContainer,
  StCoverImageContainer,
  StEditorContainer,
  StSelectorContainer,
} from "./container";

import SelectorModal from "./modals/selectorModal";
import Editor from "./editor/Editor";
import InputTitle from "./inputTitle";
import { useData } from "./hooks/useData";
import { styled } from "styled-components";

function Write() {
  // for Modal opening
  const [isSelector, setIsSelector] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const { data, setData } = useData();
  const selectorHandler = () => {
    setIsSelector(!isSelector);
  };

  const imageHandlerbuttton = () => {
    setIsImage(!isImage);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("coverImage", coverImage);
    formData.append("title", data.title);
    formData.append("residence", "1");
    formData.append("content", data.content);

    if (Array.isArray(data.tags)) {
      data.tags.forEach((tag, index) => {
        if (tag.contentImageId) {
          formData.append(`tags[${index}][contentImageId]`, tag.contentImageId);
        }

        if (Array.isArray(tag.tagsId)) {
          tag.tagsId.forEach((id, i) => {
            formData.append(`tags[${index}][tagsId][${i}]`, id);
          });
        }

        if (Array.isArray(tag.itemId)) {
          tag.itemId.forEach((id, i) => {
            formData.append(`tags[${index}][itemId][${i}]`, id);
          });
        }

        if (Array.isArray(tag.itemName)) {
          tag.itemName.forEach((name, i) => {
            formData.append(`tags[${index}][itemName][${i}]`, name);
          });
        }

        if (Array.isArray(tag.brand)) {
          tag.brand.forEach((brand, i) => {
            formData.append(`tags[${index}][brand][${i}]`, brand);
          });
        }

        if (Array.isArray(tag.coverImage)) {
          tag.coverImage.forEach((image, i) => {
            formData.append(`tags[${index}][coverImage][${i}]`, image);
          });
        }

        if (Array.isArray(tag.axisX)) {
          tag.axisX.forEach((x, i) => {
            formData.append(`tags[${index}][axisX][${i}]`, x);
          });
        }

        if (Array.isArray(tag.axisY)) {
          tag.axisY.forEach((y, i) => {
            formData.append(`tags[${index}][axisY][${i}]`, y);
          });
        }
      });
    }
    try {
      const response = await api.post("article", formData);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const apiResponse = await response.json();
      console.log(apiResponse);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} encType="multipart/form-data">
        <StWriteheader>
          <StSubmitBtn type="submit">발행</StSubmitBtn>
        </StWriteheader>
        <StBodyContainer>
          <StSelectorContainer>
            <StSelectorButton onClick={selectorHandler}>
              <div style={{ display: "flex", flex: "1 0 0px" }}>
                <div> icon</div>
                <StSelectorTextMain> 필수 정보 입력</StSelectorTextMain>
                <StSelectorTextSub>
                  공간을 이해하는데 필요한 정보이니 최대한 꼼꼼하게
                  입력해주세요.
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
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
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
          <InputTitle />
          <StEditorContainer>
            <Editor />
          </StEditorContainer>
        </StBodyContainer>
      </form>
    </>
  );
}

export default Write;