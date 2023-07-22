import React, { useState, useEffect } from "react";
import Button from "../../../shared/Button";
import UserAvatar from "./UserAvatar";
import InputSearch from "../../../shared/Input/InputSearch";
import Bookmark from "./Bookmark";
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

const Header = () => {
    const [scrollFlag, setScrollFlag] = useState(false);
    const [value, setValue] = useState("");

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
            const { scrollY } = window;
            const isScrolled = scrollY > 0;
            setScrollFlag(isScrolled);
            console.log("Scroll Flaged");
        };
        /** 스크롤 이벤트 콜백 함수 */
        const handleScroll = throttle(updateScroll, 100);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    console.log(scrollFlag);

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
                    {false ? (
                        <>
                            <Bookmark />
                            <UserAvatar />{" "}
                        </>
                    ) : (
                        <StHeaderSubMenuContainer>
                            <li>로그인</li>
                            <li>회원가입</li>
                            <li>고객센터</li>
                        </StHeaderSubMenuContainer>
                    )}
                    <Button>
                        글쓰기 <FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                </div>
            </StHeaderContainer>
        </StHeaderWrap>
    );
};

export default Header;
