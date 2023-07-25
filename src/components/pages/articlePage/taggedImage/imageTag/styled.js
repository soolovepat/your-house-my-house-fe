import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const StTagIcon = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: ${props => props.$yOffset - 12}px; 
    left: ${props => props.$xOffset - 12}px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.primaryColor};
    cursor: pointer;

    & > svg {
        width: 12px;
        height: 12px;
        color: #fff;
    }
`;

export const StProductTooltip = styled.div`
    visibility: ${props => props.$isHover? 'visible' : 'hidden'};
    width: 280px;
    border-radius: 8px;
    background-color: rgb(247,249, 250);
    box-shadow: rgba(63, 71, 77, 0.2) 0px 4px 10px 0px;
    position: absolute;
    top: 32px; 
    left: calc(50% - 140px);

    &:after {
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        top: -3px;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 8px solid transparent;
        border-top-width: 0;
        border-bottom-color: #fff;
    }

    & > a {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > img {
            width: 80px;
            height: 80px;
        }
        
        & > svg {
            color: #757575;
        }
    }
`;

export const StProductInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 180px;
    height: 80px;
    padding-left: 10px;

    & > p {
        color: #494949;

        &:nth-child(1) {
            font-size: 12px;
            color: #757575;
            font-weight: 400;
        }
        &:nth-child(2) {
            font-size: 14px;
            font-weight: 500;
            margin-top: 3px;
        }
        &:nth-child(3) {
            font-size: 16px;
            font-weight: 700;
            margin-top: auto;
        }
    }
`;

