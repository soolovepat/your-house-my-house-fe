import styled from "styled-components";

export const StHeaderWrap = styled.header`
    width: 100%;    
    border-bottom: 1px solid #eaedef;
    position: ${props => props.$display ? "sticky" : "relative"};
    top: ${props => props.$display ? '-50px' : 0};
`;

export const StHeaderBanner = styled.div`
    width: 100%;
    height: 50px;
    background-color: #00bbff;
`;
export const StHeaderContainer = styled.div`
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

    & > li {
        list-style: none;
        margin: 0 20px;
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
    background-color: #ccc;
`;
