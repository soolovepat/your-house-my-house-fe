import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../../shared/button/Button";
import Button from "../../../shared/Button/Button"
import UserAvatar from "./userAvatar/UserAvatar";
// import InputSearch from "../../../shared/Input/InputSearch";
import Bookmark from "./bookmark/Bookmark";
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
import useStickyMode from "../../../../hooks/useStickyMode";
import { useNavigate } from "react-router-dom";
import api from "../../../../api/api";
import { useState, useEffect } from "react";

const Header = () => {
  const isSticky = useStickyMode(0);

  useEffect(() => {
    CheckuserInfo();
  }, []);

  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false);
  const [nickname, setNickname] = useState("");

  const token = localStorage.getItem("token");
  const CheckuserInfo = async () => {
    const currentUserToken = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    await api
      .get("/auth/checkout", currentUserToken)
      .then((response) => {
        if (response.data.success === true) {
          setLoggedin(true);
          return setNickname(response.data.nickname);
        }
      })
      .catch(console.log("failed"));
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    setLoggedin(false);
  };
  return (
    <StHeaderWrap $display={isSticky}>
      <StHeaderBanner>6조 수고 많으셨습니다!🎉</StHeaderBanner>
      <StHeaderContainer>
        <div>
          <StLogo>
            <Link to="/">
              <img src="/assets/images/logo-your-house-my-house.png" alt="" />
            </Link>
          </StLogo>
          <StMenuContainer>
            <li>
              <Link to="/article">커뮤니티</Link>
            </li>
            <li>
              <Link to="item/category?category=1">쇼핑</Link>
            </li>
          </StMenuContainer>
        </div>
        <div>
          {/* <InputSearch value={value} handleChange={(e) => setValue(e.target.value)} placeholder="검색어를 입력하세요" name="search" /> */}
          {loggedin ? (
            <>
              <Bookmark />
              <UserAvatar /> <button onClick={logoutHandler}>로그아웃</button>
            </>
          ) : (
            <StHeaderSubMenuContainer>
              <li onClick={() => navigate("/login")}>로그인</li>
              <li onClick={() => navigate("/signup")}>회원가입</li>
              {/* <li>고객센터</li> */}
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
