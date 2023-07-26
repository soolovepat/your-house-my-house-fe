import React, { useState } from "react";
import { styled } from "styled-components";
import { useData } from "../hooks/useData";
import { StTitleContainer } from "../container";

function InputTitle() {
  const [title, setTitle] = useState('')
  const {data, setData} = useData()
  const [touched, setTouched] = useState(false)
  
  const titleHandler = (e)=>{
    if(e.target.value.length <= 80) {
      setTitle(e.target.value)
      setData({...data, title: e.target.value})
    }
  }

  return (
    <>
    <StTitleContainer>
      <StTitleInput
       placeholder="제목을 입력해주세요" 
       value={title} 
       onChange={titleHandler} 
       onBlur={() => setTouched(true)}
       touched={touched}
       title={title}
       />
      <StWordCount>{title.length}/80</StWordCount>
    </StTitleContainer>
    <div>{title === '' && touched && <StWarning>필수 입력 항목 입니다.</StWarning>} </div>
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
  border-bottom: ${props => (props.touched && props.title === "" ? "1px solid  rgb(255, 119, 119)" : "none")};

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
const StWarning = styled.div`
      margin: 10px 0px;
    font-size: 12px;
    line-height: 18px;
    font-weight: bold;
    color: rgb(255, 119, 119);
`