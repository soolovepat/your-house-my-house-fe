import React from "react";
import {
  StSignupPage,
  StSignupContainer,
  StSignuplogo,
  StSnsLoginButtonContainer,
  StSnsButonWrapper,
  StSnsButton,
  StSignUpForm,
  StSignupEmailContainer,
  StSignupEmailIdInput,
  StSignupPasswordContainer,
  StSignupPasswordInput,
  StSignupPasswordConfirmContainer,
  StSignupPasswordConfirmInput,
  StSignupNicknameContainer,
  StSignupNicknameInput,
  StSignupButton,
  StSignupToLoginContainer,
  StSignupLinktoLogin,
} from "./style";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../api/api";
const SignupPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const nicknameRef = useRef();
  const [newuser, setNewuser] = useState({
    email: "",
    password: "",
    confrim: "",
    nickname: "",
  });
  const replace = useNavigate();

  const handleChange = (e) => {
    setNewuser({
      ...newuser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newuser);
  };

  const newUserInfoCheck = () => {
    const passwordCondition = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (newuser.email < 1) {
      return emailRef.current.focus();
    }
    if (!passwordCondition.test(newuser.password)) {
      alert("비밀 번호가 조건에 맞지 않습니다.");
      return passwordRef.current.focus();
    }
    if (newuser.confrim === "") {
      return confirmRef.current.focus();
    }
    if (newuser.nickname === "") {
      return nicknameRef.current.focus();
    }
    if (newuser.confrim !== newuser.password) {
      alert("비밀번호 확인이 올바르지 않습니다.");
      return confirmRef.current.focus();
    }
    return register();
  };

  const register = async () => {
    await axios
      .post(
        "http://3.34.5.210:3000/api/auth/signup",
        {
          email: newuser.email,
          password: newuser.password,
          confirm: newuser.confrim,
          nickname: newuser.nickname,
        }
        // { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.user);
        console.log(response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        alert("회원가입에 성공 하였습니다.");
        replace("/login");
      })
      .catch((error) => {
        console.log("an error occurred:", error.response);
        alert("an error occurred:", error.response);
      });
  };

  return (
    <StSignupPage>
      <StSignupContainer>
        <StSignuplogo>회원가입</StSignuplogo>

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

        <StSignUpForm onSubmit={handleSubmit}>
          <StSignupEmailContainer>
            이메일
            <StSignupEmailIdInput
              name="email"
              value={newuser.email}
              type="email"
              onChange={handleChange}
              ref={emailRef}
              placeholder="이메일"
            />
          </StSignupEmailContainer>

          <StSignupPasswordContainer>
            비밀번호
            <span>영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
            <StSignupPasswordInput
              name="password"
              value={newuser.password}
              type="password"
              onChange={handleChange}
              ref={passwordRef}
              placeholder="비밀번호"
            />
          </StSignupPasswordContainer>

          <StSignupPasswordConfirmContainer>
            비밀번호 확인
            <StSignupPasswordConfirmInput
              name="confrim"
              value={newuser.confrim}
              onChange={handleChange}
              ref={confirmRef}
              type="password"
              placeholder="비밀번호"
            />
          </StSignupPasswordConfirmContainer>

          <StSignupNicknameContainer>
            닉네임
            <span>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
            <StSignupNicknameInput
              name="nickname"
              value={newuser.nickname}
              type="text"
              onChange={handleChange}
              ref={nicknameRef}
              placeholder="별명 (2~15자)"
            />
          </StSignupNicknameContainer>

          <StSignupButton onClick={newUserInfoCheck} type="submit">
            회원가입하기
          </StSignupButton>
        </StSignUpForm>

        <StSignupToLoginContainer>
          이미 아이디가 있으신가요? &nbsp;
          <StSignupLinktoLogin to="/login">로그인</StSignupLinktoLogin>
        </StSignupToLoginContainer>
      </StSignupContainer>
    </StSignupPage>
  );
};

export default SignupPage;
  // const res = await api.post("/api/auth/signup");
    // try {
    //   const res = await api.post(
    //     "/api/auth/signup",
    //     {
    //       email: newuser.email,
    //       password: newuser.password,
    //       confirm: newuser.confrim,
    //       nickname: newuser.nickname,
    //     },
    //     { withCredentials: true }
    //   );
    //   console.log(res);
    // } catch (error) {
    //   console.error("Error:", error);
    //   throw error; // Rethrow the error to let the caller handle it as well if needed
    // }