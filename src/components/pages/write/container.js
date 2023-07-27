import { styled } from "styled-components";

//-------- container---------//
const StBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 720px;
  margin: 0 auto;
`;

const StSelectorContainer = styled.div`
  margin: 16px 0px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(234, 235, 239, 0.8) 0px 2px 4px 0px;

  &:hover {
    filter: brightness(95%);
  }
`;

const StCoverImageContainer = styled.div`
  background-color: blue;
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 15px;
`;

const StTitleContainer = styled.div`
  margin-top: 45px;
  width: 100%;
  border-bottom: 1px solid rgb(234, 235, 239);
  position: relative;
`;

const StEditorContainer = styled.div`
  padding: 40px 0px 30vh;
  
`;


export {
  StBodyContainer,
  StCoverImageContainer,
  StEditorContainer,
  StSelectorContainer,
  StTitleContainer,
};