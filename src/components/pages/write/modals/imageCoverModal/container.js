import { styled } from "styled-components";

const StOverlayed = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
z-index: 1000;
`;

const StImageModalContainer = styled.div`
width: 700px;
height: auto;
border-radius: 8px;
background-color: white;
margin: 20px auto;
`;

const StImageModalWrapper = styled.div`
height: auto;
padding: 35px 30px 26px;
display: flex;
flex-direction: column;
box-sizing: border-box;
`;

const StImagePreview = styled.div`
flex: 0 0 auto;
height: 350px;
margin: 30px 0px 26px;
padding: 20px;
border-radius: 4px;
border: 1px solid rgb(234, 235, 239);
`;

export {StImageModalContainer,StImageModalWrapper,StImagePreview,StOverlayed}