import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

export const StDropdown = styled.div`
    min-width: 200px;
    position: absolute;
    top: 35px;
    left: 50%;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(218, 221, 224);
    border-radius: 6px;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -20px);
    box-shadow: rgba(63, 71, 77, 0.2) 0px 4px 10px 0px;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    &:after {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        top: -3px;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 12px solid transparent;
        border-top-width: 0;
        border-bottom-color: #fff;
    }

    ${({ $isOpened }) =>
        $isOpened &&
        css`
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 0);
            left: 50%;
        `}

    & > ul {
        width: 100%;  
        border-radius: inherit;
        overflow: hidden;  

    & > li {
        width: 100%;
        padding: 15px;        

        &:hover {
            background-color: #effbff;
        }

        & > a {
            width: 100%;
            height: 100%;
            font-size: 15px;
            color: #424242;
            font-weight: 400;
        }
    }
    }
`;
