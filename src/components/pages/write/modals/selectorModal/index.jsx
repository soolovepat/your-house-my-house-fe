import React from "react";
import { styled } from "styled-components";

function SelectorModal() {
  




  return (
    <StSelectorModal>
      <div
        style={{
          display: "flex",
        }}
      >
        <p>주거형태</p>
      </div>
      <div>
        <p> 평수</p>
        <input type="number" />평
      </div>
      <div
        style={{
          display: "flex",
          gap:"80px"
        }}
      >
        <p> 예산</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <p> 공사/시공</p>
            <input type="number" /> 만원
          </div>
          <div>
            <p> 홈스타일링</p>
            <input type="number" /> 만원
          </div>
          <div>
            <p> 총예산</p>
            <input type="number" /> 만원
          </div>
        </div>
      </div>
    </StSelectorModal>
  );
}

const StSelectorModal = styled.div`
  height: 300px;
  background-color: white;
  padding: 15px 30px 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

export default SelectorModal;