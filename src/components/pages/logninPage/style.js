import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const StLoginPageSection = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
`;
export const StLoginPageContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0;
`;
export const StLoginPageLogo = styled.div`
  margin: 20px;
`;
export const StLoginForm = styled.form`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
export const StEmailInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 4px 4px 0 0;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
export const StPasswordInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 0 0 4px 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
export const StLoginButton = styled.button`
  margin: 20px 0;
  width: 100%;
  padding: 15px 10px;
  font-weight: 700;
  font-size: 17px;
  min-height: 50px;
  background-color: #35c5f0;
  color: #fff;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1b85a6;
  }
`;
export const StSignupButton = styled(Link)`
  text-decoration-line: none;
  color: black;
  font-size: 12px;
  cursor: pointer;
`;
export const StSnsLoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  flex-direction: column;
  span {
    font-size: 8px;
    margin-bottom: 10px;
  }
`;
export const StSnsButonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const StSnsButton = styled.div`
  color: #35c5f0;
`;
export const StLoginProblem = styled.div`
  font-size: 8px;
`;
