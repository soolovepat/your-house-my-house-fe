import React, { useState } from "react";
import { styled } from "styled-components";
import { useData } from "../hooks/useData";

function InputTitle() {
  const [title, setTitle] = useState('')
  const {data, setData} = useData()
  
  const titleHandler = (e)=>{
    setTitle(e.target.value)
    setData({...data, title:title})
  }

  return (
    <>
      <StTitleInput placeholder="제목을 입력해주세요" value={title} onChange={titleHandler} />
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
