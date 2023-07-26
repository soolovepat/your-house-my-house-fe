import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/button/Button";
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

const Header = () => {
    const isSticky = useStickyMode(0);
    // const [value, setValue] = useState("");

    return (
        <StHeaderWrap $display={isSticky}>
            <StHeaderBanner>6조 수고 많으셨습니다!🎉</StHeaderBanner>
            <StHeaderContainer>
                <div>
                    <StLogo>
                        <Link to="/"><img src="/assets/images/logo-your-house-my-house.png" alt="" /></Link>
                    </StLogo>
                    <StMenuContainer>
                        <li><Link to="/articles">커뮤니티</Link></li>
                        <li>쇼핑</li>
                    </StMenuContainer>
                </div>
                <div>
                    {/* <InputSearch value={value} handleChange={(e) => setValue(e.target.value)} placeholder="검색어를 입력하세요" name="search" /> */}
                    {true ? (
                        <>
                            <Bookmark />
                            <UserAvatar />{" "}
                        </>
                    ) : (
                        <StHeaderSubMenuContainer>
                            <li>로그인</li>
                            <li>회원가입</li>
                            {/* <li>고객센터</li> */}
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
