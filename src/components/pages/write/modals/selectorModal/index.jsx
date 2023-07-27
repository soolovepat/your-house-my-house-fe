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
    </StSelectorModal>
  );
}

const StSelectorModal = styled.div`
  height: auto;
  background-color: white;
  padding: 15px 30px 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

export default SelectorModal;
