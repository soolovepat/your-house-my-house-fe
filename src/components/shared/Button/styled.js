import styled, { css } from "styled-components";

// 컬러셋
const $primary = "#35C5F0";
const $primaryHover = "#009FCE";

// 컬러 타입별 색상 반환해주는 함수
const getBtnColor = (colorType, isHover = false) => {
    switch (colorType) {
        default:
            return isHover ? $primaryHover : $primary;
    }
};

export const StyledButton = styled.button`
    display: flex;
    flex-direction: ${(props) => (props.$isIconRight ? "row" : "row-reverse")};
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${(props) => getBtnColor(props.color)};
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;

    &:hover {
        background-color: ${(props) => getBtnColor(props.color, true)};
    }

    // icons
    & > i {
        display: block;
        width: 18px;
        height: 18px;
        ${(props) => (props.$isIconRight ? "margin-left: 6px" : "margin-right: 6px")};
        background-size: cover;
    }

    // 크기. default는 large
    /* ${(props) =>
        props.size === "medium" &&
        css`
            height: 2rem;
            font-size: 0.75rem;

            & > i {
                width: 0.75rem;
                height: 0.75rem;
            }
        `}
    ${(props) =>
        props.size === "small" &&
        css`
            height: 1.75rem;
            font-size: 0.5rem;

            & > i {
                width: 0.6rem;
                height: 0.6rem;
            }
        `} */

    // $negative
    /* ${(props) =>
        props.$negative === true &&
        css`
            background-color: transparent;
            border: 2px solid ${(props) => getBtnColor(props.color)};
            color: ${(props) => getBtnColor(props.color)};

            &:hover {
                border-color: ${(props) => getBtnColor(props.color, true)};
                background-color: ${(props) => getBtnColor(props.color, true)};
                color: #fff;
            }
    `} */

    /* &:disabled {
        background-color: $disabled;
        cursor: not-allowed;

        &:hover {
            background-color: $disabled;
            color: #fff !important;
            box-shadow: none;
            border-width : 2px;
        }

        // $negative
            ${(props) =>
                props.$negative === true &&
                css`
                    background-color: transparent;
                    border: 2px solid $disabled;
                    
                    &:hover {
                        border-color: $disabled;
                        //color: $disabled !important;
                        background-color: transparent;
                        border: 2px solid $disabled;
                    }
            `}
    } */

`;
