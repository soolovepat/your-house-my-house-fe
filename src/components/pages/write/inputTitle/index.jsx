import React from "react";
import { styled } from "styled-components";

function InputTitle() {
  return (
    <>
      <StTitleInput placeholder="제목을 입력해주세요" />
    </>
  );
}

export default InputTitle;


const StTitleInput = styled.input`
  padding: 15px 60px 15px 0px;
  font-size: 34px;
  line-height: 31px;
  border: none;
  color: rgb(41, 41, 41);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgb(215,215,215); 
  }
`
