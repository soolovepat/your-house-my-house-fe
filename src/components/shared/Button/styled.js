import styled from "styled-components";

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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
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

    & > svg {
        width: 18px;
        height: 18px;
    }

`;
