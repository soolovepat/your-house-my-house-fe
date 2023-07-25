import { useState } from "react";
import {
  StImageModalContainer,
  StImageModalWrapper,
  StImagePreview,
  StOverlayed,
} from "./container";
import { StImageModalButton, StImagePreviewText } from "./styled";

// Image open Modal----------
const ImageCoverMdal = ({closeModal, setCoverImage}) => {

  const coverImageHanler = (e) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("contentImage", file)
      setCoverImage(URL.createObjectURL(file));

     closeModal()
    };
  };
  return (
    <StOverlayed>
      <StImageModalContainer>
        <StImageModalWrapper>
          <h1> 커버 사진 추가 하기</h1>
          <div
            style={{
              flex: "0 0 auto",
              textAlign: "center",
            }}
          >
            <StImageModalButton className="border" onClick={coverImageHanler}>
              직접 업로드
            </StImageModalButton>
          </div>
          <StImagePreview>
            <StImagePreviewText>
              현제 편집중인 글에서 사용된 이미지가 없습니다.
            </StImagePreviewText>
          </StImagePreview>
          <div>
            <button onClick={()=>closeModal()}>취소</button>
            <button onClick={()=> window.alert('기능 구현중입니다')}>확인</button>
          </div>
        </StImageModalWrapper>
      </StImageModalContainer>
    </StOverlayed>
  );
};

export default ImageCoverMdal;