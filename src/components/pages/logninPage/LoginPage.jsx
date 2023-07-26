import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useState, useRef } from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";
import { useCookies } from "react-cookie";
const StLoginPageSection = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
`;
const StLoginPageContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0;
`;
const StLoginPageLogo = styled.div`
  margin: 20px;
`;
const StLoginForm = styled.form`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
const StEmailInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 4px 4px 0 0;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
const StPasswordInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 0 0 4px 4px;
  padding: 13px 15px 14px;
  width: 100%;
  box-sizing: border-box;
`;
const StLoginButton = styled.button`
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
const StSignupButton = styled(Link)`
  text-decoration-line: none;
  color: black;
  font-size: 12px;
  cursor: pointer;
`;
const StSnsLoginButtonContainer = styled.div`
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
const StSnsButonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const StSnsButton = styled.div`
  color: #35c5f0;
`;
const StLoginProblem = styled.div`
  font-size: 8px;
`;
axios.defaults.withCredentials = true;
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["cookieId"]);
  // "XSRF-TOKEN"
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  const userCheck = () => {
    if (user.email < 1) {
      emailRef.current.focus();
      return;
    }
    if (user.password < 1) {
      passwordRef.current.focus();
      return;
    }
    return userRegistryCheck();
  };

  const userRegistryCheck = async () => {
    await axios
      .post("/api/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        console.log(response);
        setCookie("cookieId", { path: "/" });
        navigate("/");
        console.log(document.cookie);
      })
      .catch((error) => {
        console.log("an error occurred:", error.response);
        alert("에러가 발생하였습니다");
      });
  };

  return (
    <StLoginPageSection>
      <StLoginPageContainer>
        <StLoginPageLogo onClick={() => navigate("/")}>
          {" "}
          <img src="/assets/images/logo-your-house-my-house.png" alt="" />
        </StLoginPageLogo>

        <StLoginForm onSubmit={handleSubmit}>
          <StEmailInput
            ref={emailRef}
            name="email"
            value={user.email}
            type="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <StPasswordInput
            ref={passwordRef}
            name="password"
            value={user.password}
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />

          <StLoginButton onClick={userCheck} type="submit">
            로그인
          </StLoginButton>

          <StSignupButton to={"/signup"}>회원가입</StSignupButton>
        </StLoginForm>

        <StSnsLoginButtonContainer>
          <span>SNS계정으로 간편 로그인/회원가입</span>
          <StSnsButonWrapper>
            <StSnsButton>
              <SiNaver />
            </StSnsButton>
            <StSnsButton>
              <RiKakaoTalkFill />
            </StSnsButton>
          </StSnsButonWrapper>
        </StSnsLoginButtonContainer>

        <StLoginProblem>로그인에 문제가 있으신가요?</StLoginProblem>
      </StLoginPageContainer>
    </StLoginPageSection>
  );
};

export default LoginPage;
