import React, { useState, useEffect } from "react";
import Button from "../../../shared/Button";
import { StHeaderWrap, StHeaderBanner, StHeaderContainer, StMenuContainer, StLogo } from "./styled";

const Header = () => {
    const [scrollFlag, setScrollFlag] = useState(false);

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
                <StLogo />
                <StMenuContainer>
                    <li>커뮤니티</li>
                    <li>쇼핑</li>
                </StMenuContainer>
                {true ? (
                    <div>
                        <input />
                        <Button>글쓰기</Button>
                    </div>
                ) : (
                    <div></div>
                )}
            </StHeaderContainer>
        </StHeaderWrap>
    );
};

export default Header;
