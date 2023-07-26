import React, { useState, useEffect } from "react";
import Button from "../../../shared/button/Button";
import UserAvatar from "./userAvatar";
import InputSearch from "../../../shared/input/inputSearch";
import Bookmark from "./bookmark";
import {
  StHeaderWrap,
  StHeaderBanner,
  StHeaderContainer,
  StMenuContainer,
  StHeaderSubMenuContainer,
  StLogo,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Header = () => {
  const [scrollFlag, setScrollFlag] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  /** scroll 이벤트를 위한 스로틀 함수 */
  const throttle = (callback, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    };
  };

  useEffect(() => {
    /** 스크롤 여부 판별 함수 */
    const updateScroll = () => {
      const token = localStorage.getItem("token");
      console.log("토큰", token);
      const { scrollY } = window;
      const isScrolled = scrollY > 0;
      setScrollFlag(isScrolled);
      console.log("Scroll Flaged");
    };
    /** 스크롤 이벤트 콜백 함수 */
    const handleScroll = throttle(updateScroll, 100);

    window.addEventListener("scroll", handleScroll);

    // try {
    //   const currentUserToken = {
    //     headers: { Authorization: `Bearer ${token}` },
    //   };
    //   const { data } = await axios.get(
    //     `http://3.34.5.210:3000/api/auth/login`,
    //     currentUserToken
    //   );
    //   setLoggedin();
    //   return data;
    // } catch {
    //   console.log("failed");
    //   //   alert(e.response.data.msg);
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollFlag);

  // const logoutHandler = () => {
  //   removeCookie("cookieId");
  //   navigate("/login");
  // };
  const logoutHandler = () => {
    removeCookie(cookies);
    navigate("/login"); // 메인 페이지로 이동
    console.log("cookies", cookies);
    setLoggedin(false);
  };
  return (
    <StHeaderWrap $display={scrollFlag}>
      <StHeaderBanner />
      <StHeaderContainer>
        <div>
          <StLogo>
            <img src="/assets/images/logo-your-house-my-house.png" alt="" />
          </StLogo>
          <StMenuContainer>
            <li>커뮤니티</li>
            <li>쇼핑</li>
          </StMenuContainer>
        </div>
        <div>
          <InputSearch
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            placeholder="검색어를 입력하세요"
            name="search"
          />
          {loggedin ? (
            <>
              <Bookmark />
              <UserAvatar /> {/* {data.nickname} */}
              <button onClick={logoutHandler}>로그아웃</button>
            </>
          ) : (
            <StHeaderSubMenuContainer>
              <li onClick={() => navigate("/login")}>로그인</li>
              <li onClick={() => navigate("/signup")}>회원가입</li>
              <li>고객센터</li>
            </StHeaderSubMenuContainer>
          )}
          <Button>
            글쓰기{" "}
            <FontAwesomeIcon
              onClick={() => {
                console.log("clicked");
                return navigate("/write");
              }}
              icon={faChevronDown}
            />
          </Button>
        </div>
      </StHeaderContainer>
    </StHeaderWrap>
  );
};

export default Header;
