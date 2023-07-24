import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StSignupPage = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
`;
export const StSignupContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0;
`;
export const StSignuplogo = styled.div``;
export const StSnsLoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
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
export const StSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StSignupEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
`;
export const StSignupEmailIdInput = styled.input`
  margin: 5px 0 5px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;

export const StSignupPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  gap: 10px;
  span {
    font-size: 8px;
  }
`;

export const StSignupPasswordInput = styled.input`
  margin: 5px 0 5px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
export const StSignupPasswordConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  gap: 10px;
`;
export const StSignupPasswordConfirmInput = styled.input`
  margin: 5px 0 5px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
export const StSignupNicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  gap: 10px;
  span {
    font-size: 8px;
  }
`;
export const StSignupNicknameInput = styled.input`
  margin: 5px 0 5px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
export const StSignupButton = styled.button`
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
export const StSignupToLoginContainer = styled.div`
  font-size: 8px;
`;
export const StSignupLinktoLogin = styled(Link)`
  color: black;
  font-weight: bold;
`;
