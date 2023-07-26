import React, { useState } from "react";
import { styled } from "styled-components";
import { useData } from "../hooks/useData";

function InputTitle() {
  const [title, setTitle] = useState('')
  const {data, setData} = useData()
  
  const titleHandler = (e)=>{
    if(e.target.value.length <= 80) {
      setTitle(e.target.value)
      setData({...data, title: e.target.value})
    }
  }

  return (
    <>
      <StTitleInput placeholder="제목을 입력해주세요" value={title} onChange={titleHandler} />
      <StWordCount>{title.length}/80</StWordCount>

    </>
  );
}

export default InputTitle;




const StTitleInput = styled.input`
  width: 100%;
  padding: 15px 60px 15px 0px;
  font-size: 34px;
  line-height: 31px;
  border: none;
  color: rgb(41, 41, 41);
  font-weight: bold;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgb(215,215,215); 
    font-weight: 500;
  }
`

const StWordCount = styled.div`
margin: -9px 0px 0px;
position: absolute;
line-height: 19px;
right: 0px;
top: 50%;
color: rgb(130, 140, 148); ;
`