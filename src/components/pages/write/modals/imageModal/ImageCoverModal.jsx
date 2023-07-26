import { styled } from "styled-components";
import api from "../../../../../api/api";
import {
  StImageModalContainer,
  StImageModalWrapper,
  StImagePreview,
  StOverlayed,
} from "./container";
import { StImageModalButton, StImagePreviewText } from "./styled";

// Image open Modal----------
const ImageCoverMdal = ({ closeModal, setCoverImage }) => {
  const coverImageHanler = (e) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("coverImage", file);

      try {
        const result = await api.post("/article/coverImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const cover_URL = result.data.url;
        setCoverImage(cover_URL);
      } catch (error) {
        console.log("Upload failed");
      }

      closeModal();
    };
  };
  return (
    <StOverlayed>
      <StImageModalContainer>
        <StImageModalWrapper>
          <Sttitle> 커버 사진 추가 하기</Sttitle>
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
          <StModalButtonWraper>
            <StModalButton
              backgroundColor="#ededed;"
              borderColor="#ededed"
              color="#757575"
              onClick={() => closeModal()}
            >
              취소
            </StModalButton>
            <StModalButton
              backgroundColor="#35c5f0"
              borderColor="#35c5f0"
              color="#fff"
              onClick={() => window.alert("기능 구현중입니다")}
            >
              확인
            </StModalButton>
          </StModalButtonWraper>
        </StImageModalWrapper>
      </StImageModalContainer>
    </StOverlayed>
  );
};

export default ImageCoverMdal;

const StModalButtonWraper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 6px 0px;
`;

// styled
const StModalButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.color};
  width: 100%;
  max-width: 160px;
  margin: 0 15px;
  padding: 11px 10px 12px;
  font-size: 17px;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
`;

const Sttitle = styled.h1`
  margin: 0px 0px 35px;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
    color: rgb(41, 41, 41);
`;

