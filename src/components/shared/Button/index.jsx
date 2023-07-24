import React from "react";
import { StyledButton } from "./styled";

/** 버튼 공통 요소 컴포넌트
 * @param {function} handleBtnClick - 버튼 온클릭 이벤트 함수
 * @param {string} size - 디폴트는 large, medium, small
 * @param {boolean} $negative - true일 경우 line 디자인
 */
const Button = (props) => {
    const { handleBtnClick, color = "primary", size, $negative, children } = props;
    const onBtnClick = () => {
        handleBtnClick !== undefined && handleBtnClick(); // 이벤트 함수가 전달되었을 시 실행
    };

    return (
        <StyledButton 
        color={color} 
        size={size} 
        $negative={$negative} 
        onClick={onBtnClick}>
            {/* 버튼 내 텍스트 및 아이콘*/}
            {children}
        </StyledButton>
    );
};

export default Button;
