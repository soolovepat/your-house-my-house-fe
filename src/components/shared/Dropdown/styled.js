import style, { keyframes, css } from "styled-components";

const fadeInDown = keyframes`
    0% {
        opacity: 0;
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;

export const StDropdown = styled.div`
    display: ${props => (props.$isActive? "block" : "none")};
    position: relative;
    padding: 8px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(218, 221, 224);
    border-radius: 6px;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 4px 10px 0px;
    transition: transform opacity 0.2s ease 0s;
    animation: fadeInDown 1s;
`;


