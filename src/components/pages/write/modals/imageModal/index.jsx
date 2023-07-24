import { StImageModalContainer, StImageModalWrapper, StImagePreview, StOverlayed } from "./container";
import { StImageModalButton, StImagePreviewText } from "./styled";

// Image open Modal----------
const ImageModal = () => {
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
              <StImageModalButton className="border">
                {" "}
                직접 업로드
              </StImageModalButton>
            </div>
            <StImagePreview>
              <StImagePreviewText>
                현제 편집중인 글에서 사용된 이미지가 없습니다.
              </StImagePreviewText>
            </StImagePreview>
            <div></div>
          </StImageModalWrapper>
        </StImageModalContainer>
      </StOverlayed>
    );
  };
  
  export default ImageModal


  