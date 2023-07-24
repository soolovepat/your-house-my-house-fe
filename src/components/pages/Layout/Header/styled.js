import styled from "styled-components";
// import {theme} from "../../../../styles/theme";

export const StHeaderWrap = styled.header`
    width: 100%;    
    border-bottom: 1px solid #eaedef;
    position: ${props => props.$display ? "sticky" : "relative"};
    top: ${props => props.$display ? '-51px' : 0};
    z-index: 1000;
`;

export const StHeaderBanner = styled.div`
    width: 100%;
    height: 50px;
    background-color: #00bbff;
`;
export const StHeaderContainer = styled.div`
    /* ${({ theme }) => theme.container('column')}; */
    width: 100%;
    height: 80px;
    padding: 10px 60px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
    }
`;

export const StMenuContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 30px;
    margin-left: 40px;

    & > li {
        list-style: none;
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;

        &:hover {
            color: rgb(53, 197, 240);
        }
    }
`;

export const StLogo = styled.div`
    display: inline-block;
    width: 74px;
    height: 34px;
    & > img {
        width: 100%;
    }
`;

export const StHeaderSubMenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > li {
        font-size: 14px;
        padding: 0 10px;
        border-right: 1px solid #EAEDEF;
        cursor: pointer;

        &:last-child {
            border-right: none;
        }
    }
`;
